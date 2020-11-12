import { requireParam } from "../helpers/require-param"
import { capitalize, lowerCase, upperCase } from "../helpers/string-methods"
import { validateDuplicateSchool } from "../validators"

export default async function makeSchool(schoolInfo: any){
 
  const validated = await validate(schoolInfo)
  const transformed = await transform(validated)
  const normalized = normalize(transformed)

  await validateDuplicateSchool(normalized.name)


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
  } = schoolInfo

  requireParam(name, 'name')
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