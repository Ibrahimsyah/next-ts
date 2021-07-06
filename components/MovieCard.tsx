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
  background: #fff;
  margin: 8px;
`;

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;
  return (
    <>
      <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
        <Link href={`/detail/${movie.id}`} passHref>
          <Wrapper>
            <MovieImage src={movie.posterPath} alt={movie.title ? `${movie.title} Image` : 'gambar'} />
          </Wrapper>
        </Link>
      </div>
    </>
  );
};

type MovieCardProps = {
  movie: Movie;
};

export default MovieCard;
