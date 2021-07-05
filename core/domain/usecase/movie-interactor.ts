import MovieRepository from "../../data/movie-repository";
import MovieUseCase from "./movie-usecase";

const MovieInteractor : MovieUseCase = {
  getAllMovies: async () => MovieRepository.getAllMovie()
}

export default MovieInteractor