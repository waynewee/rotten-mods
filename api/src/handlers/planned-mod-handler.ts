
import makePlannedMod from '../makers/planned-mod-maker'
import PlannedMod from '../models/planned-mod'
import Mod from '../models/mod'
import { ObjectNotFoundError } from '../errors'
import makeSearch from '../makers/search-maker'

export default class PlannedModHandler {

  static async findByUserId(userId: string){
      
    const plannedMods = await PlannedMod.find({ userId })

    if( plannedMods.length == 0 ){
      return []
    }

    const mods = await Mod.find({
      $or: plannedMods.map( (plannedMod: { modId: string }) => ({_id: plannedMod.modId}) )
    })

    const prereqIds = PlannedModHandler.getPrereqIds(mods)

    const prereqs = prereqIds.length == 0 ? [] : await Mod.find({
      $or: prereqIds.map(prereqId => ({ _id: prereqId}))
    })

    const plannedModsWithDetails = PlannedModHandler.populateDetails(mods, plannedMods, prereqs)

    return plannedModsWithDetails

  }

  static async update(id: string, plannedModInfo: any){
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

  static async create(plannedModInfo: any){


    console.log(plannedModInfo)
    const plannedMod = await makePlannedMod(plannedModInfo)
    const newPlannedMod = new PlannedMod(plannedMod)
    return newPlannedMod.save()

  }

  static async remove(id: string){
    const result = await PlannedMod.deleteOne({_id: id})

    if( result.n === 0 ){
      throw new ObjectNotFoundError("PlannedMod")
    }

    return result
  }

  static async search(searchInfo: any){

    const search = await makeSearch(searchInfo)

    const { limit, page, searchTerm } = search

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

  static getPrereqIds(mods: any){

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

  static populateDetails(mods: any, plannedMods: any, prereqs: any){

    const plannedModList = []
    const modIds = mods.map( (mod: any) => mod._id )
    
    for( let i = 0; i < mods.length; i++ ){

      const mod = mods[i]
      const plannedMod = plannedMods.filter((plannedMod: any) => plannedMod.modId.toString() == mod._id.toString())[0]
      
      const plannedModObj = plannedMod.toJSON()
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
            const plannedPrereq = plannedMods.filter( (plannedMod: any) => plannedMod.modId.toString() == prereqId)[0]
            if( plannedPrereq.semester >= plannedMod.semester ){
              missingPrereqs.push(prereq)
              allPrereqsPresent = false
            }
          }

        }
      }

      plannedModObj.mod = mod
      plannedModObj.missingPrereqs = missingPrereqs
      plannedModObj.allPrereqsPresent = allPrereqsPresent
      
      plannedModList.push(plannedModObj)

    }
    return plannedModList
  }
  
}