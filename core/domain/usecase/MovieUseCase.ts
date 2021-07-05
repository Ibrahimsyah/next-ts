import Movie from "../model/Movie"
import MovieDetail from "../model/MovieDetail"

type MovieUseCase = {
  getAllMovies(): Promise<Movie[]>
  getMovieDetail(id: number): Promise<MovieDetail>
}

export default MovieUseCase