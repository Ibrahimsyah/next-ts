import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return <>Hello</>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { id },
  } = context;
  console.log(id);
  return {
    props: {},
  };
};
