export const getNews = (selectedCategory) => {
  return fetch(
    `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&country=in&max=10&apikey=${process.env.REACT_APP_API_KEY}`
  ).then((res) => res.json());
};
