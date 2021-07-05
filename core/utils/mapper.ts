import Constanst from "../config/contants"
import MovieResponse from "../data/responses/MovieResponse"
import Movie from "../domain/model/movie"

const Mapper = {
  movieResponseToDomain: (responses: MovieResponse[]): Movie[] => {
    return responses.map(response => {
      const posterUrl = `${Constanst.IMAGE_BASE_THUMB}${response.poster_path}`
      return {
        id: response.id,
        overview: response.overview,
        title: response.title,
        posterPath: posterUrl,
        voteAverage: response.vote_average
      }
    })
  }
}

export default Mapper