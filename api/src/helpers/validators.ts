export function validateString(str: string): boolean{
  return str.length > 0
}

export function validateEmail(email: string): boolean {
  
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/

  return regex.test(email)

}