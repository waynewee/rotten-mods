import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

import {RatingObjSchema} from '../publishers/rating/ratingPubSchema'
import { EventObjSchema } from '../publishers/event/eventPubSchema'

export const SchoolSchema = createSchema({
  name: Type.string({ required: true }),
  shortName: Type.string({ required: true }), 
  rating: RatingObjSchema,
  event: EventObjSchema
},{
  timestamps: true
})

export type SchoolDoc = ExtractDoc<typeof SchoolSchema> 

const School = typedModel('School', SchoolSchema, undefined, undefined, {
  getShortName(name: string){
    const prepositions = ["of"]

    return name.split(" ").reduce((acc, curr) => {
      if( prepositions.includes(curr.toLowerCase())){
        return acc
      }
      return acc + curr.split("")[0].toUpperCase()
    },"")

  }
});

export default School