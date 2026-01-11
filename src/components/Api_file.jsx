import axios from "axios";


const API_KEY = "e268f947d09e4a5397457e3dd8cc20f1";

export const getTopHeadlines = async (category) => {


  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${category}&from=2025-12-11&sortBy=publishedAt&apiKey=${API_KEY}`
  );
  return response.data.articles;
};


// https://newsapi.org/v2/everything?q=sport&from=2025-12-11&sortBy=publishedAt&apiKey=e268f947d09e4a5397457e3dd8cc20f1