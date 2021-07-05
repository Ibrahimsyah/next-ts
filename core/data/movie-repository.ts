import Movie from "../domain/model/movie";
import IMovieRepository from "../domain/repository/imovie-repository";
import Api from "../services/api";
import Mapper from "../utils/mapper";
import MovieResponse from "./responses/MovieResponse";

const MovieRepository: IMovieRepository = {
  getAllMovie: async () => {
    const { data } = await Api.getAllMovies()
    const { results }: { results: MovieResponse[] } = data
    const movies = Mapper.movieResponseToDomain(results)
    return movies
  }
}

export default MovieRepository