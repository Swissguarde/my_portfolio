import { SOCIAL_LINKS } from "../utils/sociallinks";
import { motion } from "framer-motion";
const Socials = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.7,
        ease: "easeInOut",
      }}
      className="fixed left-[50px] -bottom-1 z-[100] hidden text-custom-slate lg:block"
    >
      <div className="flex flex-col items-center space-y-7 text-xl">
        {SOCIAL_LINKS.map(({ id, link, logo: Logo }) => (
          <motion.a
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: id * 0.4,
              duration: 0.5,
              ease: "easeInOut",
            }}
            key={id}
            className="hover:text-light-teal"
            target={"_blank"}
            href={link}
            rel="noreferrer"
          >
            <Logo />
          </motion.a>
        ))}
        <div className="h-36 border-l border-custom-slate"></div>
      </div>
    </motion.div>
  );
};
export default Socials;
