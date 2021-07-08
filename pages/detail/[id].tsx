import { GetServerSideProps } from "next";
import Head from "next/head";
import styled from "styled-components";
import GenreList from "../../components/GenreList";
import MovieGrid from "../../components/MovieGrid";
import Movie from "../../core/domain/model/Movie";
import MovieDetail from "../../core/domain/model/MovieDetail";
import MovieInteractor from "../../core/domain/usecase/MovieInteractor";
import styles from "../../styles/Detail.module.css";

type DetailProps = {
  movieDetail: MovieDetail;
  movieRecommendation: Movie[];
};

type SectionProps = {
  withPadding?: boolean;
  fluid?: boolean;
};

const MainWrapper = styled.div`
  background: #000;
  border-radius: 16px;
  display: flex;
  width: 100%;
  height: 60vh;
  overflow: hidden;
`;

const Section = styled.div<SectionProps>`
  padding: ${(props) => (props.withPadding ? "32px" : "0px")};
  flex: ${(props) => (props.fluid ? "2" : "1")};
  height: 100%;
`;

const ThumbnailMask = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    z-index: 2;
    width: 20%;
    height: 100%;
    background: linear-gradient(90deg, #000, transparent);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  margin-top: 16px;
  color: #868686;
  font-size: 13px;
`;

const Statistic = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-around;
`;

const StatisticContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.h3`
  color: ${(props) => props.color};
  font-size: 1.3em;
  font-weight: bold;
  margin: 0;
`;

const StatLabel = styled.p`
  color: ${(props) => props.color};
  font-size: 0.8em;
  margin: 0;
`;

const RecommendationWrapper = styled.div`
  background: #000;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px;
  margin-top: 32px;
  overflow: hidden;
`;

export default function Detail(props: DetailProps) {
  const { movieDetail, movieRecommendation } = props;
  return (
    <>
      <Head>
        <title>{movieDetail.title}</title>
      </Head>
      <main className={styles.mainContainer}>
        <MainWrapper>
          <Section withPadding>
            <Title>{movieDetail.title}</Title>
            <GenreList genreList={movieDetail.genres} />
            <Statistic>
              <StatisticContent>
                <StatNumber color="#18d36c">
                  {movieDetail.voteAverage} / 10
                </StatNumber>
                <StatLabel color="#18d36c">Vote</StatLabel>
              </StatisticContent>
              <StatisticContent>
                <StatNumber color="#ee720c">
                  {movieDetail.popularity}
                </StatNumber>
                <StatLabel color="#ee720c">Popularity</StatLabel>
              </StatisticContent>
            </Statistic>
            <Description>{movieDetail.overview}</Description>
          </Section>
          <Section fluid>
            <ThumbnailMask>
              <Thumbnail src={movieDetail.posterPath} />
            </ThumbnailMask>
          </Section>
        </MainWrapper>
        <RecommendationWrapper>
          <Title>Related Movies</Title>
          <MovieGrid movies={movieRecommendation} />
        </RecommendationWrapper>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.query.id);
  const movieDetailPromise = MovieInteractor.getMovieDetail(id);
  const movieRecommendationPromise = MovieInteractor.getMovieRecommendation(id);
  const data = await Promise.all([
    movieDetailPromise,
    movieRecommendationPromise,
  ]);
  const [movieDetail, movieRecommendation] = data;
  return {
    props: {
      movieDetail,
      movieRecommendation,
    },
  };
};
