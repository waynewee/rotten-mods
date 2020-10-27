import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

import { acadSemType } from './types';

export const PlannedModSchema = createSchema({
  modId: Type.objectId(),
  userId: Type.objectId(),
  semester: acadSemType,
},{
  timestamps: true
})

export type PlannedModDoc = ExtractDoc<typeof PlannedModSchema> 

const PlannedMod = typedModel('PlannedMod', PlannedModSchema, undefined, undefined, {
  checkForPreReqs: function(mods: Array<any>, plannedMods: Array<any>){

    const modList = []
    const stringifiedModIds = mods.map( mod => mod._id.toString() )
    
    for( let i = 0; i < mods.length; i++ ){

      const mod = mods[i]
      const plannedMod = plannedMods.filter(plannedMod => plannedMod.modId.toString() == mod._id.toString())[0]
      
      const modObj = mod.toJSON()
      const prereqIds = mod.prereqs

      let allPreReqsPresent = true
      if( prereqIds ){
        for( let j = 0; j < prereqIds.length; j++){
          const prereqId = prereqIds[j].toString()

          if( !stringifiedModIds.includes(prereqId) ){
            allPreReqsPresent = false
          } else {
            const prereq = plannedMods.filter( plannedMod => plannedMod.modId == prereqId )[0]
            if( prereq.semester >= plannedMod.semester ){
              allPreReqsPresent = false
            }
          }

        }
      }
      modObj.plannedMod = plannedMod
      modObj.allPreReqsPresent = allPreReqsPresent
      
      modList.push(modObj)

    }
    console.log(modList)
    return modList
  }
});

export default PlannedMod