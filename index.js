// Write your solution here!
// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']
const destructivelyAppendCat = () => {
  return cats.push('Ralph')
}
const destructivelyPrependCat = () => {
  return cats.unshift('Bob')
}
const destructivelyRemoveLastCat = () => {
  return cats.pop()
}
const destructivelyRemoveFirstCat = () => {
  return cats.shift()
}
const appendCat = (name) => {
return[...cats,'Broom']
}
const prependCat = (name) => {
  return ['Arnold',...cats]
}
const removeLastCat = () => {
 return cats.slice(0,-1)
}
const removeFirstCat = () => {
  return cats.slice(1)
}
