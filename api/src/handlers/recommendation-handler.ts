import { ObjectNotFoundError } from '../errors'
import makeRecommendationQuery from '../makers/recommendation-maker'
import Recommendation from '../models/recommendation'
import Mod from '../models/mod'

export async function findByTypeAndUserId({ userId, type }: {userId: string, type: string}){

  const recommendationQuery = await makeRecommendationQuery({ userId, type })

  const results = await Recommendation.find({
    $and: [
      { userId: recommendationQuery.userId },
      { type: recommendationQuery.type }
    ]
  }).sort({ createdAt: -1 })

  const result = results[0]

  if( !result ){
    throw new ObjectNotFoundError("Recommendation") 
  }

  const resultObject = await populateModules(result)

  return resultObject
  
}

export async function findByType(type: string){

  const recommendationQuery = await makeRecommendationQuery({ type })

  const results = await Recommendation.find({ type: recommendationQuery.type }).sort({ createdAt: -1})

  const result = results[0]

  if( !result){
    throw new ObjectNotFoundError("Recommendation")
  }

  const resultObject = await populateModules(result)

  return resultObject

}

async function populateModules(recommendation: any){

  const recommendationObject = recommendation.toJSON()

  if( recommendationObject.modIds.length === 0){
    recommendationObject.mods = []
    return recommendationObject
  }

  const mods = await Mod.find({
    $or: recommendationObject.modIds.map( (modId: any) => ({ _id: modId }))
  })

  recommendationObject.mods = mods

  return recommendationObject

} 