import { motion } from "framer-motion";
import { contactVariants } from "../utils/motion";

const Contact = () => {
  return (
    <motion.div
      variants={contactVariants}
      initial="hidden"
      whileInView="show"
      className="mt-32"
      id="contact"
    >
      <div className="flex items-center justify-center text-light-teal">
        <div className="spanLink mono-font">03.</div>
        <div>Contact Me</div>
      </div>
      <div className="mt-6 text-center text-4xl font-semibold text-lightest-slate md:text-5xl">
        Get In Touch
      </div>

      <div className="mx-auto mt-8 text-center leading-8 text-custom-slate md:max-w-xl">
        <p>
          I am actively seeking new opportunities that can help me grow both
          personally and professionally. I am committed to expanding my
          knowledge and experience to grow as a developer. I am not afraid to
          take on new roles or responsibilities, even if they are outside of my
          comfort zone, as I believe that this is the best way to grow and
          develop as a developer.
        </p>

        <div className="mt-10">
          <a
            href="mailto:ayomikolade2003@gmail.com"
            target={"_blank"}
            rel="noreferrer"
            className="w-max rounded border border-[#64ffda] bg-transparent px-14 py-3 text-base text-[#64ffda] transition-all hover:bg-[#57cbff]/10 lg:px-16"
          >
            Contact Me!
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
