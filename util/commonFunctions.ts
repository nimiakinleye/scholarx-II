export const truncateText = (text:string, newLength:number) => {
  const newText = `${text.slice(0, newLength)}${text.length < newLength ? "" : "..."}`
  return newText
}