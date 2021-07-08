import { GetServerSideProps } from "next";
import Head from "next/head";
import styled from "styled-components";
import GenreList from "../../components/GenreList";
import MovieDetail from "../../core/domain/model/MovieDetail";
import MovieInteractor from "../../core/domain/usecase/MovieInteractor";
import styles from "../../styles/Detail.module.css";

type DetailProps = {
  data: MovieDetail;
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

export default function Detail(props: DetailProps) {
  const data: MovieDetail = props.data;
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <main className={styles.mainContainer}>
        <MainWrapper>
          <Section withPadding>
            <Title>{data.title}</Title>
            <GenreList genreList={data.genres} />
            <Statistic>
              <StatisticContent>
                <StatNumber color="#18d36c">{data.voteAverage} / 10</StatNumber>
                <StatLabel color="#18d36c">Vote</StatLabel>
              </StatisticContent>
              <StatisticContent>
                <StatNumber color="#ee720c">{data.popularity}</StatNumber>
                <StatLabel color="#ee720c">Popularity</StatLabel>
              </StatisticContent>
            </Statistic>
            <Description>{data.overview}</Description>
          </Section>
          <Section fluid>
            <ThumbnailMask>
              <Thumbnail src={data.posterPath} />
            </ThumbnailMask>
          </Section>
        </MainWrapper>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.query.id);
  const data = await MovieInteractor.getMovieDetail(id);
  return {
    props: { data },
  };
};
