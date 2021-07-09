import { GetServerSideProps } from "next";
import Head from "next/head";
import MovieGrid from "../components/MovieGrid";
import MovieInteractor from "../core/domain/usecase/MovieInteractor";
import styles from "../styles/Home.module.css";

export default function Home(props: any) {
  const { data, top } = props;
  return (
    <>
      <Head>
        <title>Home | Open Movies</title>
      </Head>
      <main className={styles.mainContainer}>
        <h1 className={styles.siteTitle}>Open Movies</h1>
        <h3 className={styles.siteDescription}>We provides recommendations for the best and latest films just for you</h3>
        <h3 className={styles.siteMovieType}>Now Playing</h3>
        <MovieGrid movies={data} />
        <h3 className={styles.siteMovieType}>Top Rated</h3>
        <MovieGrid movies={top} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await MovieInteractor.getAllMovies();
  const top = await MovieInteractor.getTopMovies();
  return {
    props: {
      data,
      top,
    },
  };
};
