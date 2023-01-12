import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Socials from "../components/Socials";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kolade Ayomide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative px-[25px] pb-[2000px] sm:px-[50px]">
        <Hero />
        <Socials />
      </main>
    </div>
  );
};

export default Home;
