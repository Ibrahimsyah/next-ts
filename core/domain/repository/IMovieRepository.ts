import Movie from "../model/Movie"
import MovieDetail from "../model/MovieDetail"

type IMovieRepository = {
  getAllMovie(): Promise<Movie[]>
  getMovieDetailById(id: number): Promise<MovieDetail>
}

export default IMovieRepository