import type { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import { selectNavState } from "../redux/navbarSlice";

const Home: NextPage = () => {
  const isOpen = useSelector(selectNavState);

  return (
    <div>
      <Head>
        <title>Kolade Ayomide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main
        className={`${
          isOpen && "blurs fixed"
        } px-[25px] pb-[2000px] sm:px-[50px]`}
      >
        <Hero />
        <Socials />
      </main>
    </div>
  );
};

export default Home;
