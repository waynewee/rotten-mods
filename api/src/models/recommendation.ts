import { createSchema, Type, typedModel, ExtractDoc } from 'ts-mongoose';

//recommendation can be based on likes/views/ratings
export enum recommendationTypesEnum {
    likes = 'likes',
    views = 'views',
    ratings = 'ratings'
}
  
const recommendationTypes = [ recommendationTypesEnum.likes, recommendationTypesEnum.views, recommendationTypesEnum.ratings ]
  

export const RecommendationSchema = createSchema({
  userId: Type.objectId({required: true}),
  recommendations: [{type: String}],
  type: Type.string({required: true, enum: recommendationTypes})
},{
  timestamps: true
})

export type RecommendationDoc = ExtractDoc<typeof RecommendationSchema> 

const Recommendation = typedModel('Recommendation', RecommendationSchema);

export default Recommendation