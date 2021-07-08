import Movie from "../model/Movie"
import MovieDetail from "../model/MovieDetail"

type MovieUseCase = {
  getAllMovies(): Promise<Movie[]>
  getMovieDetail(id: number): Promise<MovieDetail>
  getTopMovies(): Promise<Movie[]>,
  getMovieRecommendation(movieId: number): Promise<Movie[]>
}

export default MovieUseCase