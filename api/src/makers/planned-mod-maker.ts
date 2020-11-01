import { requireParam } from "../helpers/require-param"
import {
  validateModId,
  validateSemester,
  validateUserId
} from '../validators'

export default async function makePlannedMod(plannedModInfo: any){

  const validated = await validate(plannedModInfo)
  const transformed = await transform(validated)
  const normalized = normalize(transformed)

  return normalized

}

function transform(plannedModInfo: any){
  return plannedModInfo
}

async function validate(plannedModInfo: any){

  const {
    userId, 
    modId,
    semester
  } = plannedModInfo

  requireParam(userId, 'userId')
  requireParam(modId, 'modId')
  requireParam(semester, 'semester')
  await validateUserId(userId)
  await validateModId(modId)
  validateSemester(semester)

  return plannedModInfo

}

function normalize(plannedModInfo: any){
  return plannedModInfo
}