import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import About from "../components/About";
import Extras from "../components/Extras";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Socials from "../components/Socials";
import { selectNavState } from "../redux/navbarSlice";
import { fetchProjects } from "../utils/fetchProjects";

interface Props {
  projects: Project[];
}

const Home = ({ projects }: Props) => {
  console.log(projects);
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
        <About />
        <Projects projects={projects} />
        <Extras projects={projects} />
      </main>
    </div>
  );
};

export default Home;

// Backend
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const projects = await fetchProjects();
  return {
    props: {
      projects,
    },
  };
};
