import { getUsersByIds } from "./helpers";

export async function transformReviews(reviews: any){

  const users = await getUsersByIds(reviews.map( (review: any) => review.userId ))

  const reviewObjects = reviews.map((review: any) => {

    const reviewObject = review.toJSON()
    const userObject = users.filter( (user:any) => user._id.toString() === reviewObject.userId )[0]

    reviewObject.user = userObject

    return reviewObject

  })

  return reviewObjects

}