import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Kolade Ayomide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="px-[25px] pb-[2000px] sm:px-[50px]"></main>
    </div>
  );
};

export default Home;
