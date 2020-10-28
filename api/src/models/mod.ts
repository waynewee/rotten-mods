import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

import {RatingObjSchema} from "../publishers/rating/ratingPubSchema"
import { EventObjSchema } from '../publishers/event/eventPubSchema'
import { acadSemType } from './types';

export const ModSchema = createSchema({
  code: Type.string({ required: true }),
  schoolId: Type.objectId({required: true}),
  title: Type.string({required: true }),
  acadYear: Type.string(),
  semester: Type.array().of(acadSemType),
  description: Type.string({}),
  credit: Type.number(),
  workload: Type.number(),
  rating: RatingObjSchema,
  event: EventObjSchema,
  prereqs: Type.array().of(Type.objectId())
},{
  timestamps: true
})

export type ModDoc = ExtractDoc<typeof ModSchema> 

const Mod = typedModel('Mod', ModSchema, undefined, undefined, {
  getPreReqDetails: function(mods: Array<any>){
    return mods.reduce((acc: Array<string>, curr) => {
      if( curr.prereqs ){
        return acc.concat(curr.prereqs.map( (prereqId: { toString: () => any; }) => prereqId.toString()))
      }
      return acc
    },[])
  }
});

export default Mod