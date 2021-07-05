import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import MovieInteractor from "../../core/domain/usecase/MovieInteractor";

export default function Home() {
  return <>Hello</>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.query.id);
  const data = await MovieInteractor.getMovieDetail(id);
  console.log(data)
  return {
    props: {},
  };
};
