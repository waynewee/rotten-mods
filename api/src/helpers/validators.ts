export function validateString(str: string): boolean{
  return str.length > 0
}

export function validateEmail(email: string): boolean {
  const arr = email.split("@")[1].split(".")
  return arr[arr.length - 1] == "edu"
}