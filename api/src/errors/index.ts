export class RottenModsError extends Error {
  
  statusCode?: number 
  
  constructor(message: string, statusCode: number){
    super(message)
    this.statusCode = statusCode
  }
  
}

export class RequiredParameterError extends RottenModsError {
  constructor (param : string) {
    super(`${param} can not be null or undefined.`, 500)
  }
}

export class ObjectNotFoundError extends RottenModsError {
  constructor (objectName: string ){
    super(`${objectName} not found.`, 404)
  }
}

export class InvalidParameterError extends RottenModsError {
  constructor (param: string, msg?: string){
    super(`${param} parameter is invalid. ${msg?msg:''}`, 400)
  }
}

export class AuthenticationError extends RottenModsError {
  constructor(objectName: string){
    super(`${objectName} not authorised`, 403)
  }
}

export class DuplicateObjectError extends RottenModsError {
  constructor(objectName: string){
    super(`${objectName} duplicate found!`, 409)
  }
}