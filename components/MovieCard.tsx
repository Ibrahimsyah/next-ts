import Movie from "../core/domain/model/Movie";
import styled from "styled-components";
import Link from "next/link";

const MovieImage = styled.img`
  width: 100%;
  height: 200px;
`;

const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  color: #fff;
  border-radius: 8px;
  margin: 8px;
`

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;
  return (
    <>
      <div className="col-1">
        <Link href={`/detail/${movie.id}`} passHref>
            <Wrapper>
              <MovieImage src={movie.posterPath} alt={movie.title} />
            </Wrapper>
        </Link>
            <Title>{movie.title}</Title>
      </div>
    </>
  );
};

type MovieCardProps = {
  movie: Movie;
};

export default MovieCard;
