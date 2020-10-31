import { validateLimit, validatePage } from "../validators/index"

export default async function makeSearch(searchInfo: any){

  const transformed = transform(searchInfo)
  const validated = await validate(transformed)
  const normalized = normalize(validated)

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