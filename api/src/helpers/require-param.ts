import { RequiredParameterError } from "../errors";

export function requireParam(param:any, paramName: string){
  if( !param){
    throw new RequiredParameterError(paramName)
  }
}