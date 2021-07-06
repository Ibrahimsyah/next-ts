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
  height: 100%;
  overflow: hidden;
`;

const Section = styled.div<SectionProps>`
  padding: ${(props) => (props.withPadding ? "32px" : "0px")};
  flex: ${(props) => (props.fluid ? "2" : "1")};
  height: 100%;
`;

const ThumbnailMask = styled.div`
  width: 100%;
  height: 60vh;
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
  margin-top: 32px;
  color: #868686;
`;

const Statistic = styled.div`
  display: flex;
  justify-content: space-around;
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
              <div>
                
              </div>
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
