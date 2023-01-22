import { urlFor } from "../sanity";
import { FiGithub } from "react-icons/fi";
import { RxExternalLink } from "react-icons/rx";
import { motion } from "framer-motion";
import { projectVariants } from "../utils/motion";

interface Props {
  projects: Project[];
}
interface IProps {
  text: string;
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      id="work"
      className="mt-56 text-custom-slate md:mt-64 md:pl-10 lg:pl-36"
    >
      <div className="flex items-center text-2xl md:text-3xl">
        <div className="spanLink mono-font mr-3 text-xl lg:mr-4">02.</div>
        <div className="font-semibold">Some Projects I've Built</div>
        <div>
          <hr className="ml-6 w-14 border border-gray-400 md:w-44" />
        </div>
      </div>

      <div className="mt-16">
        <div>
          {projects.slice(0, 5).map((project) => {
            const {
              _id,
              description,
              title,
              live,
              github,
              image,
              stack_a,
              stack_b,
              stack_c,
              stack_d,
            } = project;
            return (
              <motion.div
                variants={projectVariants}
                initial="hidden"
                whileInView="show"
                key={_id}
              >
                <div className="relative mb-40 hidden w-full grid-cols-1 gap-16 md:grid-cols-2 lg:grid">
                  <section className="rounded-l-full bg-teal-700">
                    <a target={"_blank"} href={live} rel="noreferrer">
                      <img
                        src={urlFor(image[0]).url()}
                        className="h-96 w-full rounded-md object-contain opacity-50 shadow-2xl duration-500 hover:opacity-90 hover:shadow-2xl"
                        alt={title}
                      />
                    </a>
                  </section>

                  <div className="rounded-r-full border border-teal-700">
                    <h2 className="p-3 font-mono uppercase text-light-teal">
                      Featured Project
                    </h2>
                    <h2 className="my-2 p-3 text-xl font-medium text-custom-slate">
                      {title}
                    </h2>

                    <div className="absolute left-[45%] top-[30%] z-20  max-w-lg rounded bg-[#112240] p-3 shadow-xl">
                      {description[0].children.map((child: IProps) => (
                        <h2 key={child.text} className="text-desc-text">
                          {child.text}
                        </h2>
                      ))}
                    </div>
                    <div className="absolute bottom-[20%] left-[53%] flex items-center space-x-3 p-3 font-mono uppercase text-light-teal">
                      <h2>{stack_a}</h2>
                      <h2>{stack_b}</h2>
                      <h2>{stack_c}</h2>
                      <h2>{stack_d}</h2>
                    </div>

                    <div className="absolute right-[100px] bottom-[5%] flex space-x-2 p-3 text-2xl">
                      <a
                        target={"_blank"}
                        href={github}
                        rel="noreferrer"
                        className="cursor-pointer hover:text-light-teal"
                      >
                        <FiGithub />
                      </a>
                      <a
                        target={"_blank"}
                        href={live}
                        rel="noreferrer"
                        className="cursor-pointer hover:text-light-teal"
                      >
                        <RxExternalLink />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lg:hidden">
                  <section className="relative mb-12 flex flex-col rounded bg-[#112240] p-6">
                    <a
                      className=" "
                      target={"_blank"}
                      href={live}
                      rel="noreferrer"
                    >
                      <img
                        src={urlFor(image[0]).url()}
                        className="mb-4 h-full w-full rounded-md object-contain opacity-50 shadow-2xl duration-500 hover:opacity-90 hover:shadow-2xl"
                        alt={title}
                      />
                    </a>

                    <div>
                      <h2 className="font-mono uppercase text-light-teal">
                        Featured Project
                      </h2>
                      <h2 className="my-2 text-xl font-medium text-custom-slate">
                        {title}
                      </h2>
                      {description[0].children.map((child: IProps) => (
                        <h2 key={child.text} className="text-xs text-desc-text">
                          {child.text}
                        </h2>
                      ))}
                      <div className="mt-2 mb-8 flex items-center space-x-2 font-mono text-[9px] uppercase text-light-teal">
                        <h2>{stack_a}</h2>
                        <h2>{stack_b}</h2>
                        <h2>{stack_c}</h2>
                        <h2>{stack_d}</h2>
                      </div>
                    </div>

                    <div className="absolute right-5 bottom-4 mt-6 flex space-x-3 text-2xl">
                      <a
                        target={"_blank"}
                        href={github}
                        rel="noreferrer"
                        className="cursor-pointer hover:text-light-teal"
                      >
                        <FiGithub />
                      </a>
                      <a
                        target={"_blank"}
                        href={live}
                        rel="noreferrer"
                        className="cursor-pointer hover:text-light-teal"
                      >
                        <RxExternalLink />
                      </a>
                    </div>
                  </section>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default Projects;
