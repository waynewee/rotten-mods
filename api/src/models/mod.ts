import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

const ModRatingSchema = createSchema({
  count: Type.number({default: 0}),
  value: Type.number({default: 0, min: 0, max: 5})
})

export const ModSchema = createSchema({
  code: Type.string({ required: true }),
  title: Type.string({required: true }),
  acadYear: Type.string(),
  semester: Type.string(),
  faculty: Type.string(),
  department: Type.string(),
  description: Type.string({}),
  crossModule: Type.string(),
  credit: Type.number(),
  workload: Type.number(),
  rating: {
    difficulty: ModRatingSchema,
    star: ModRatingSchema
  }
},{
  timestamps: true
})

export enum modTypesEnum {
  difficulty = 'difficulty',
  star = 'star'
}

export type ModDoc = ExtractDoc<typeof ModSchema> 

const Mod = typedModel('Mod', ModSchema, undefined, undefined, {
  findOneAndUpdateRating: function(rating: any){
    return this.findOne({ _id: rating.modId })
    .then( (mod: any) => {

      const { type } = rating

      if( !mod.rating[type] ){
        mod.rating[type] = {}
      }

      mod.rating[type].count = mod.rating[type].count + 1
      mod.rating[type].value = (mod.rating[type].value + rating.value)/mod.rating[type].count
      
      return mod.save()
    })
  } 
});

export default Mod