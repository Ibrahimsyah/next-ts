import GenreResponse from "./GenreResponse"

type DetailResponse = {
  overview: string,
  title: string,
  poster_path: string,
  vote_average: number,
  tagline: string,
  genres: GenreResponse[],
  id: number,
  homepage: string,
  status: string,
  popularity: number,
}

export default DetailResponse