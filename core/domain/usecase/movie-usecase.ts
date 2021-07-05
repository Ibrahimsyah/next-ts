import Movie from "../model/movie"

type MovieUseCase = {
  getAllMovies(): Promise<Movie[]>
}

export default MovieUseCase