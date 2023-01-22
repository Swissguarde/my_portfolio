import { motion } from "framer-motion";
import { heroVariants } from "../utils/motion";

const Hero = () => {
  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      whileInView="show"
      className="mt-44 text-light-teal md:pl-10 lg:pl-36"
    >
      <div>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.5,
            ease: "easeIn",
          }}
          className="mb-3 [word-spacing:8px] md:mb-5"
        >
          Hi, my name is
        </motion.h2>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.3,
            duration: 0.6,
            ease: "easeIn",
          }}
          className="mb-4 text-4xl font-semibold md:text-6xl lg:text-7xl"
        >
          Kolade Ayomide.
        </motion.h1>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.7,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-3xl font-semibold text-custom-slate sm:text-5xl md:max-w-lg md:text-6xl lg:max-w-none "
        >
          I build things for the web.
        </motion.h1>
      </div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.9,
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="mt-7 text-custom-slate sm:max-w-md lg:max-w-lg"
      >
        I’m a software developer specializing in building exceptional digital
        experiences. I work closely with back-end developers and designers to
        ensure that the final product is visually appealing and user-friendly.
      </motion.div>

      <motion.div
        className="my-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 2.2,
          duration: 0.7,
          ease: "easeInOut",
        }}
      >
        <a
          href="mailto:ayomikolade2003@gmail.com"
          target={"_blank"}
          rel="noreferrer"
          className="w-max rounded border border-[#64ffda] bg-transparent px-14 py-3 text-base text-[#64ffda] transition-all hover:bg-[#57cbff]/10 lg:px-16"
        >
          Contact Me!
        </a>
      </motion.div>
    </motion.div>
  );
};
export default Hero;
