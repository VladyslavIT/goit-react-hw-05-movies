import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const KEY = 'a7cfffa58e55699501e5099e5e220905';

async function fetchMovies(query, page ) {
  try {
    const response = await axios.get(
      `${BASE_URL}?api_key=${KEY}&query=${query}&page=${page}`
    );

    return response.data.results;
  } catch (error) {
    toast.error('Oops, something went wrong');
  }
}

const BASE_URL_TREND = 'https://api.themoviedb.org/3/trending/all/day';

async function fetchTrends() {
  try {
    const response = await axios.get(
      `${BASE_URL_TREND}?api_key=${KEY}`
    );

    return response.data.results;
  } catch (error) {
    toast.error('Oops, something went wrong');
  }
}

const BASE_URL_ID = 'https://api.themoviedb.org/3/movie/';

async function fetchByID(id) {
  try {
    const response = await axios.get(
      `${BASE_URL_ID}${id}?api_key=${KEY}`
    );

    return response.data;
  } catch (error) {
    toast.error('Oops, something went wrong');
  }
}

const BASE_URL_CAST = 'https://api.themoviedb.org/3/movie/';

async function fetchCast(id) {
  try {
    const response = await axios.get(
      `${BASE_URL_CAST}${id}/credits?api_key=${KEY}`
    );

    return response.data.cast.slice(0,6);
  } catch (error) {
    toast.error('Oops, something went wrong');
  }
}

const BASE_URL_REVIEW = 'https://api.themoviedb.org/3/movie/';

async function fetchReview(id) {
  try {
    const response = await axios.get(
      `${BASE_URL_REVIEW}${id}/reviews?api_key=${KEY}`
    );

    return response.data.results;
  } catch (error) {
    toast.error('Oops, something went wrong');
  }
}

export { fetchMovies, fetchTrends, fetchByID, fetchCast,fetchReview };

