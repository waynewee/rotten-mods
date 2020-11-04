
import makePlannedMod from '../makers/planned-mod-maker'
import PlannedMod from '../models/planned-mod'
import Mod from '../models/mod'
import { ObjectNotFoundError } from '../errors'
import makeSearchQuery from '../makers/search-maker'


export async function findByUserId(userId: string){
    
  const plannedMods = await PlannedMod.find({ userId })

  if( plannedMods.length == 0 ){
    return []
  }

  const mods = await Mod.find({
    $or: plannedMods.map( (plannedMod: { modId: string }) => ({_id: plannedMod.modId}) )
  })

  const prereqIds = getPrereqIds(mods)

  const prereqs = prereqIds.length == 0 ? [] : await Mod.find({
    $or: prereqIds.map(prereqId => ({ _id: prereqId}))
  })

  const plannedModsWithDetails = populateDetails(mods, plannedMods, prereqs)

  return plannedModsWithDetails

}

export async function update(id: string, plannedModInfo: any){
  const existingPlannedMod = await PlannedMod.findOne({ _id: id })

  if( !existingPlannedMod ){
    throw new ObjectNotFoundError('PlannedMod')
  }

  const plannedMod = await makePlannedMod({
    ...existingPlannedMod._doc,
    ...plannedModInfo
  })

  const result = await PlannedMod.updateOne({_id: id}, plannedMod)

  return result
}

export async function create(plannedModInfo: any){


  console.log(plannedModInfo)
  const plannedMod = await makePlannedMod(plannedModInfo)
  const newPlannedMod = new PlannedMod(plannedMod)
  return newPlannedMod.save()

}

export async function remove(id: string){
  const result = await PlannedMod.deleteOne({_id: id})

  if( result.n === 0 ){
    throw new ObjectNotFoundError("PlannedMod")
  }

  return result
}

export async function search(searchInfo: any){

  const searchQuery = await makeSearchQuery(searchInfo)

  const { limit, page, searchTerm } = searchQuery

  const results = await PlannedMod.find({
    $or: [
      { name: { $regex: searchTerm, $options: 'i' } },
      { shortName: { $regex: searchTerm, $options: 'i' } }
    ]
  })
  .limit(limit) 
  .skip((page - 1) * limit)

  return results
}

function getPrereqIds(mods: any){

  const prereqIds = {} as any

  for( let i = 0; i < mods.length; i++ ){

    const mod = mods[i]

    for( let j = 0; j < mod.prereqs.length; j++ ){

      const prereqId = mod.prereqs[j]

      if(!prereqIds[prereqId]){
        prereqIds[prereqId] = true
      }

    }
  }

  return Object.keys(prereqIds)

}

function populateDetails(mods: any, plannedMods: any, prereqs: any){

  const plannedModList = []
  const modIds = mods.map( (mod: any) => mod._id )
  
  for( let i = 0; i < mods.length; i++ ){

    const mod = mods[i]

    const plannedMod = plannedMods.filter((plannedMod: any) => plannedMod.modId.toString() == mod._id.toString())[0] as {
      toJSON(): Function,
      semester: string
    }
    
    const prereqIds = mod.prereqs

    let missingPrereqs = []
    let allPrereqsPresent = true

    if( prereqIds ){
      for( let j = 0; j < prereqIds.length; j++){
        const prereqId = prereqIds[j].toString()
        const prereq = prereqs.filter( (prereq : any) => prereq._id.toString() == prereqId )[0]

        if( !modIds.includes(prereqId) ){
          missingPrereqs.push(prereq)
          allPrereqsPresent = false
        } else {
          const plannedPrereq = plannedMods.filter( (plannedMod: any) => plannedMod.modId.toString() == prereqId)[0] as {
            semester: string
          }
          if( plannedPrereq.semester >= plannedMod.semester ){
            missingPrereqs.push(prereq)
            allPrereqsPresent = false
          }
        }

      }
    }

    const plannedModObj = plannedMod.toJSON() as any

    plannedModObj.mod = mod
    plannedModObj.missingPrereqs = missingPrereqs
    plannedModObj.allPrereqsPresent = allPrereqsPresent
    
    plannedModList.push(plannedModObj)

  }
  return plannedModList
}
