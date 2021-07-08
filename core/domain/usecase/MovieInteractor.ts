import MovieRepository from "../../data/MovieRepository";
import MovieUseCase from "./MovieUseCase";

const MovieInteractor: MovieUseCase = {
  getAllMovies: async () => MovieRepository.getAllMovie(),
  getMovieDetail: async (id: number) => MovieRepository.getMovieDetailById(id),
  getTopMovies: async () => MovieRepository.getTopMovies(),
  getMovieRecommendation: async (movieId: number) => MovieRepository.getMovieRecommendation(movieId)
}

export default MovieInteractor