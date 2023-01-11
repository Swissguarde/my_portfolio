import { IoLogoAngular } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { navLinks } from "../utils/navlinks";
import { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${
        scroll && " shadow-lg"
      } fixed top-0 flex w-full items-center justify-between py-5 px-[25px] sm:px-[50px]`}
    >
      <div>
        <Link
          href="/"
          className="text-lightest-slate transition duration-300 hover:text-light-slate"
        >
          <IoLogoAngular size={40} />
        </Link>
      </div>

      <div className="hidden text-sm md:block">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-10 text-light-slate"
        >
          {navLinks.map((navlink, index) => {
            const { id, title, to } = navlink;
            return (
              <motion.li
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.4,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                key={index}
              >
                <Link href={to} className="link">
                  <span className="spanLink mono-font">{id}.</span> {title}
                </Link>
              </motion.li>
            );
          })}

          <motion.li
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.65,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <button className="inline-block w-max rounded border border-[#64ffda] bg-transparent px-3 py-2 text-sm text-[#64ffda] transition-all hover:bg-[#57cbff]/10">
              Resume
            </button>
          </motion.li>
        </motion.ul>
      </div>

      <div className="cursor-pointer md:hidden">
        <AiOutlineBars color="#64ffda" size={40} />
      </div>
    </motion.header>
  );
};
export default Header;
