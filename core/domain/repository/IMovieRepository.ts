import Movie from "../model/Movie"
import MovieDetail from "../model/MovieDetail"

type IMovieRepository = {
  getAllMovie(): Promise<Movie[]>
  getMovieDetailById(id: number): Promise<MovieDetail>
  getTopMovies(): Promise<Movie[]>
  getMovieRecommendation(movieId: number): Promise<Movie[]>
}

export default IMovieRepository