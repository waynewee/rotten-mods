import { validateLimit, validatePage } from "../validators/index"

export default async function makeSearch(searchInfo: any){

  const validated = await validate(searchInfo)
  const transformed = await transform(validated)
  const normalized = normalize(transformed)

  return normalized

}

function transform(searchInfo: any){
  return searchInfo
}

async function validate(searchInfo: any){

  const {
    page, 
    limit
  } = searchInfo

  validatePage(page)
  validateLimit(limit)

  return searchInfo 

}

function normalize(searchInfo: any){

  const {
    page, 
    limit,
    searchTerm,
    ...otherInfo
  } = searchInfo

  return {
    page: page? parseInt(page): 1,
    limit: page? parseInt(limit): 0,
    searchTerm: searchTerm? searchTerm: "",
    ...otherInfo
  }

}