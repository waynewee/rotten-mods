import { requireParam } from "../helpers/require-param"
import { capitalize, lowerCase, upperCase } from "../helpers/string-methods"

export default async function makeSchool(schoolInfo: any){
 
  const transformed = transform(schoolInfo)
  const validated = await validate(transformed)
  const normalized = normalize(validated)

  return normalized

}
 
function transform(schoolInfo: any){

  const { 
    name,
    ...otherInfo
  } = schoolInfo

  const shortName = getShortName(name)

  return {
    ...otherInfo,
    name,
    shortName
  }

}

async function validate(schoolInfo: any){

  const {
    name,
    shortName
  } = schoolInfo

  requireParam(name, 'name')
  requireParam(shortName, 'shortName')

  return schoolInfo 

}

function normalize(schoolInfo: any){

  const {
    name,
    ...otherInfo
  } = schoolInfo

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