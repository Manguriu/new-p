import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-300">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={{
            x: 1,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className=" flex-col justify-start items-start gap-6">
          <p className="subtitle-p text-base text-gray-800">
            {" "}
            Manguriu <br />
            All Rights Reserved @2023 &copy;{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 2,
          }}
          whileInView={{
            x: 0,
            opacity: 3,
          }}
          className="  border-t border-b  border-gray-400 content-center">
          <SocialIcon
            url="https://www.linkedin.com/in/brian-manguriu-3b0b07207/"
            fgColor="green"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/Mainnet14"
            fgColor="blue"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/Manguriu"
            fgColor="black"
            bgColor="transparent"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
