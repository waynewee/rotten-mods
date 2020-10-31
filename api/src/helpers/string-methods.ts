export function capitalize(str: string){
  return str.split(" ").reduce((acc, curr, index) => {
    acc += curr.split("")[0].toUpperCase() + curr.slice(1)
    
    if( index < str.split(" ").length - 1){
      acc += " "
    }
    
    return acc
  }, "")
}

export function upperCase(str: string){
  return str.toUpperCase()
}

export function lowerCase(str: string){
  return str.toLowerCase()
}