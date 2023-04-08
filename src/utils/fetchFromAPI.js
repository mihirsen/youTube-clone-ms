import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/${url}`,
    params: {
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const { data } = await axios(options);

  return data;
};
