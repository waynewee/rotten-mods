import { requireParam } from "../helpers/require-param"
import { capitalize, lowerCase, upperCase } from "../helpers/string-methods"

export default async function makeCourse(courseInfo: any){
 
  const transformed = transform(courseInfo)
  const validated = await validate(transformed)
  const normalized = normalize(validated)

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
    name,
    shortName
  } = courseInfo

  requireParam(name, 'name')
  requireParam(shortName, 'shortName')

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