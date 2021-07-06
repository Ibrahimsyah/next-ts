import MovieRepository from "../../data/MovieRepository";
import MovieUseCase from "./MovieUseCase";

const MovieInteractor: MovieUseCase = {
  getAllMovies: async () => MovieRepository.getAllMovie(),
  getMovieDetail: async (id: number) => MovieRepository.getMovieDetailById(id),

  // devsbot add: get top movies
  getTopMovies: async () => MovieRepository.getTopMovies(),
}

export default MovieInteractor