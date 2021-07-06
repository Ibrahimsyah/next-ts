import Movie from "../model/Movie"
import MovieDetail from "../model/MovieDetail"

type IMovieRepository = {
  getAllMovie(): Promise<Movie[]>
  getMovieDetailById(id: number): Promise<MovieDetail>

  // devsbot add: get top movies
  getTopMovies(): Promise<Movie[]>
}

export default IMovieRepository