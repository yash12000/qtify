import axios from "axios";

const BACKEND_ENDPOINTS = "https://qtify-backend-labs.crio.do";

const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINTS}/albums/top`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINTS}/albums/new`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINTS}/songs`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINTS}/genres`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchGenres };