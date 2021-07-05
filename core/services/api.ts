import request from "../utils/request"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API

const Api = {
  getAllMovies: () => request.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`),
  getMovieById: (id: number) => request.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
}

export default Api
