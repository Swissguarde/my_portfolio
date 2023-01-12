import { motion } from "framer-motion";
import { aboutVariants } from "../utils/motion";
import { TfiControlForward } from "react-icons/tfi";
import { LANGS } from "../utils/sociallinks";

const About = () => {
  return (
    <motion.div
      variants={aboutVariants}
      initial="hidden"
      whileInView="show"
      className="mt-56 text-custom-slate md:mt-64 md:pl-10 lg:pl-36"
    >
      <div className="flex items-center text-2xl md:text-3xl">
        <div className="spanLink mono-font mr-3 text-xl lg:mr-4">01.</div>
        <div className="font-semibold">About Me</div>
        <div>
          <hr className="ml-6 w-28 border border-gray-400 md:w-44" />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16">
        <div>
          <div className="mt-8 max-w-fit">
            Hello! My name is Ayo and I enjoy creating things that live on the
            internet. My interest in web development started in 2021 when I
            attended a seminar where i learnt about how the web works. As if i
            wasn’t already sold, there was also a live coding session which i
            found fascinating!
          </div>
          <div className="mt-4">
            Fast-forward to today, i have worked on a wide variety of projects
            using different technologies and i am confident in my ability to
            develop everything from small personal websites to large-scale
            enterprise applications.{" "}
          </div>
          <div className="mt-4">
            Here are a few technologies I’ve worked with:
            <div className="flex items-center space-x-6 md:space-x-16">
              <div className="mt-6 flex flex-col text-xs text-light-slate md:text-sm">
                {LANGS.slice(0, 3).map((lang, index) => (
                  <div key={index} className="mb-2 flex items-center">
                    <span className="mr-2">
                      <TfiControlForward />
                    </span>
                    {lang.title}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col text-xs text-light-slate md:text-sm">
                {LANGS.slice(3, 6).map((lang, index) => (
                  <div key={index} className="mb-2 flex items-center">
                    <span className="mr-2">
                      <TfiControlForward />
                    </span>
                    {lang.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto">
          <img
            className="h-60 w-60 rounded-lg object-cover md:h-72 md:w-72"
            src="/placeholder.jpg"
            alt=""
          />
          <div className="absolute left-6 top-5 -z-10 h-60 w-60 rounded-lg border-2 border-light-teal md:h-72 md:w-72"></div>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
