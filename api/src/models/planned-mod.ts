// import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

// import { acadSemType } from './types';

const mongoose = require('mongoose')

export const PlannedModSchema = new mongoose.Schema({
  modId: { type: String, required: true},
  userId: { type: String, required: true },
  semester: { type: Number, min: 1, max: 8 }
},{
  timestamps: true
})

const PlannedMod = mongoose.model('plannedMod', PlannedModSchema)

// const PlannedMod = typedModel('PlannedMod', PlannedModSchema, undefined, undefined, {
//   checkForPreReqs: function(mods: Array<any>, plannedMods: Array<any>, preReqMods: Array<any>){

//     const plannedModList = []
//     const stringifiedModIds = mods.map( mod => mod._id.toString() )
    
//     for( let i = 0; i < mods.length; i++ ){

//       const mod = mods[i]
//       const plannedMod = plannedMods.filter(plannedMod => plannedMod.modId.toString() == mod._id.toString())[0]
      
//       const plannedModObj = plannedMod.toJSON()
//       const prereqIds = mod.prereqs

//       let missingPrereqs = []
//       let allPrereqsPresent = true

//       if( prereqIds ){
//         for( let j = 0; j < prereqIds.length; j++){
//           const prereqId = prereqIds[j].toString()
//           const prereq = preReqMods.filter( preReqMod => preReqMod._id.toString() == prereqId )[0]

//           if( !stringifiedModIds.includes(prereqId) ){
//             missingPrereqs.push(prereq)
//             allPrereqsPresent = false
//           } else {
//             const plannedPrereq = plannedMods.filter( plannedMod => plannedMod.modId.toString() == prereqId)[0]
//             if( plannedPrereq.semester >= plannedMod.semester ){
//               missingPrereqs.push(prereq)
//               allPrereqsPresent = false
//             }
//           }

//         }
//       }

//       plannedModObj.mod = mod
//       plannedModObj.missingPrereqs = missingPrereqs
//       plannedModObj.allPrereqsPresent = allPrereqsPresent
      
//       plannedModList.push(plannedModObj)

//     }
//     return plannedModList
//   }
// });

export default PlannedMod