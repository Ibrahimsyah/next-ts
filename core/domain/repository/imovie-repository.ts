import Movie from "../model/movie"

type IMovieRepository = {
  getAllMovie(): Promise<Movie[]>
}

export default IMovieRepository