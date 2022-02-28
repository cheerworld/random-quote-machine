export const getRandomIntInclusive = (max) => {
  max = Math.floor(max);
    
  return Math.floor(Math.random() * (max - 0 + 1) + 0); //The maximum is inclusive and the minimum is inclusive
}
