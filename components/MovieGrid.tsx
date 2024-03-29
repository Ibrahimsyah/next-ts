import styled from "styled-components";
import Movie from "../core/domain/model/Movie";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const MovieGrid = (props: MovieGridProps) => {
  const { movies } = props;
  return (
    <Wrapper>
      {movies.map((movie: Movie, index: number) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </Wrapper>
  );
};

type MovieGridProps = {
  movies: Movie[];
};

export default MovieGrid
