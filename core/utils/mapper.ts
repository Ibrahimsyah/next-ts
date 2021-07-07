import Constanst from "../config/contants"
import DetailResponse from "../data/responses/DetailResponse"
import MovieResponse from "../data/responses/MovieResponse"
import Movie from "../domain/model/Movie"
import MovieDetail from "../domain/model/MovieDetail"

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
  },

  movieDetailResponseToDomain: (response: DetailResponse): MovieDetail => {
    const posterUrl = `${Constanst.IMAGE_BASE_FULL}${response.poster_path}`
    const genres = response.genres.map(genre => genre.name)
    return {
      title: response.title,
      overview: response.overview,
      posterPath: posterUrl,
      voteAverage: response.vote_average,
      tagLine: response.tagline,
      genres: genres,
      id: response.id,
      homepage: response.homepage,
      status: response.status,
      popularity: response.popularity
    }
  }
}

export default Mapper