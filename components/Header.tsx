import { IoLogoAngular } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { navLinks } from "../utils/navlinks";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav, selectNavState } from "../redux/navbarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectNavState);
  const [scroll, setScroll] = useState<boolean>(false);
  const toggleNavbar = () => {
    dispatch(toggleNav());
  };
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
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${
          scroll && " shadow-lg"
        } fixed top-0 z-[60] flex w-full items-center justify-between bg-navy bg-opacity-70 py-5 px-[25px] backdrop-blur-md sm:px-[50px]`}
      >
        <div>
          <Link
            href="/"
            className="text-lightest-slate transition duration-300 hover:text-light-slate"
          >
            <IoLogoAngular color="#64ffda" size={40} />
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
              <button className="w-max rounded border border-[#64ffda] bg-transparent px-3 py-2 text-sm text-[#64ffda] transition-all hover:bg-[#57cbff]/10">
                Resume
              </button>
            </motion.li>
          </motion.ul>
        </div>

        <button className="z-[100] md:hidden" onClick={toggleNavbar}>
          <AnimatePresence>
            {isOpen ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <RxCross1 color="#64ffda" size={40} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 45 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <AiOutlineBars color="#64ffda" size={40} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <div
          className={`fixed top-0 right-0 z-40 flex h-[100vh] w-[70%] flex-col items-center justify-center space-y-6 bg-light-navy text-white shadow-2xl duration-700  md:hidden ${
            isOpen ? "right-0" : "right-[-100vw]"
          }`}
        >
          {navLinks.map((navlink, index) => {
            const { id, title, to } = navlink;
            return (
              <Link
                key={index}
                href={to}
                className="link flex flex-col items-center text-base"
              >
                <span className="mono-font text-[#64ffda]">{id}.</span>
                <h2 className="mb-2">{title}</h2>
              </Link>
            );
          })}
          <button className="w-max rounded border border-[#64ffda] bg-transparent px-10 py-3 text-base text-[#64ffda] transition-all hover:bg-[#57cbff]/10">
            Resume
          </button>
        </div>
      </motion.header>
    </>
  );
};
export default Header;
