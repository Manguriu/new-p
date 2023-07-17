import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className=" flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-5xl px-5 justify-evenly mx-auto items-center">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <motion.img
          initial={{
            x: -200,
            opacity: -1,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          src="https://github.com/Manguriu/portfolio/blob/main/public/hello.png?raw=true"
          alt=""
          height={64}
          width={95}
          className="mt-10 mb-10 md:mb-0 flex-shrink-0 rounded-full md:rounded-lg object-cover xl:w-[200px] xl:h-[250px]"
        />

        <div className="space-y-4 px-0 md:px-10 mt-4 md:mt-0">
          <h2 className="title-p text-center text-4xl title flex justify-center ">
            About
          </h2>
          <h4 className="text-2xl md:text-4xl font-semibold mb-3">
            <span className="underline"> Manguriu</span>
          </h4>
          <p className="text-base md:text-lg mt-2 p-4 border-t about-morph subtitle-p">
            As an experienced software developer, I have a strong background in
            coding, testing, and maintaining software systems. Throughout my
            career, I have developed a versatile skill set that allows me to
            excel in multiple programming languages. Specifically, I specialize
            in React, Next.js, Laravel, and JavaScript, which I have mastered to
            create efficient and scalable applications. With my expertise in
            React and Next.js, I can effortlessly build dynamic and interactive
            user interfaces. These frameworks provide a solid foundation for
            delivering exceptional user experiences while ensuring optimal
            performance. Additionally, my proficiency in Laravel, a powerful PHP
            framework, enables me to develop robust and secure back-end systems.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
