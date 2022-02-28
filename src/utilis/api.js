import { getRandomIntInclusive } from "./getRandomIntInclusive";

export const getQuote = async () => {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const quotesToJson = await response.json();
    return quotesToJson[getRandomIntInclusive(quotesToJson.length-1)];
  } catch (e) {
    console.warn("Error in getAllQuotes API call: ", e);
  }
}