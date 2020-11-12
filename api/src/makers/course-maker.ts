import { requireParam } from "../helpers/require-param"
import { capitalize, lowerCase, upperCase } from "../helpers/string-methods"
import { validateDuplicateCourse } from "../validators"

export default async function makeCourse(courseInfo: any){
 
  const validated = await validate(courseInfo)
  const transformed = await transform(validated)
  const normalized = normalize(transformed)

  await validateDuplicateCourse(normalized.name)

  return normalized

}
 
function transform(courseInfo: any){

  const { 
    name,
    ...otherInfo
  } = courseInfo

  const shortName = getShortName(name)

  return {
    ...otherInfo,
    name,
    shortName
  }

}

async function validate(courseInfo: any){

  const {
    name
  } = courseInfo

  requireParam(name, 'name')

  return courseInfo 

}

function normalize(courseInfo: any){

  const {
    name,
    ...otherInfo
  } = courseInfo

  return {
    name: capitalize(name),
    ...otherInfo
  }
}

function getShortName(name: string){

  const exclude = ["of", "and"]

  return name.split(" ").reduce((acc, curr) => {
    if( !exclude.includes(lowerCase(curr))){
      acc += upperCase(curr.split("")[0])
    }
    return acc
  },"")
}