import Movie from "../domain/model/Movie";
import IMovieRepository from "../domain/repository/IMovieRepository";
import Api from "../services/api";
import Mapper from "../utils/mapper";
import MovieResponse from "./responses/MovieResponse";

const MovieRepository: IMovieRepository = {
  getAllMovie: async () => {
    const { data } = await Api.getAllMovies()
    const { results }: { results: MovieResponse[] } = data
    const movies = Mapper.movieResponseToDomain(results)
    return movies
  },

  getMovieDetailById: async (id: number) => {
    const { data } = await Api.getMovieById(id)
    const result = Mapper.movieDetailResponseToDomain(data)
    return result
  },

  // devsbot add: get top movies
  getTopMovies: async () => {
    const { data } = await Api.getTopMovies()
    const { results }: { results: MovieResponse[] } = data
    const topMovies = Mapper.movieResponseToDomain(results)
    return topMovies
  }
}

export default MovieRepository