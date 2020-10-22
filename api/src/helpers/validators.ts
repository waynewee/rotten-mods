export function validateString(str: string): boolean{
  return str.length > 0
}

export function validateEmail(email: string): boolean {
  const arr = email.split("@")[1].split(".")
  const arr_ = arr.slice(arr.length - 2, arr.length)
  return arr_[0] == "edu" && arr_[1] == "sg"
}