import Movie from "../model/Movie"
import MovieDetail from "../model/MovieDetail"

type MovieUseCase = {
  getAllMovies(): Promise<Movie[]>
  getMovieDetail(id: number): Promise<MovieDetail>

  // devsbot add: get top movies
  getTopMovies(): Promise<Movie[]>
}

export default MovieUseCase