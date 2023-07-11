import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Manguriu Is The Name",
      "I Like Programming <Npm install code loving!>",
      "Coffee is my thing < git init love it />",
      "I am a full stack developer with experience in building web applications using JavaScript, React.js",
    ],
  });
  return (
    <div className=" relative min-h-screen">
      <div className="hero-container">
        <div className="flex-1 padding-x">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <p className="text-2xl"> Hello there,</p>
          <h1 className="text-2xl sm:text-4xl 2xl:text-5xl ">
            <br />
            My Name is <span className="font-semibold">Brian Manguriu</span>
          </h1>
          <p className="text-lg sm:text-xl text-black-800 font-light mt-5">
            {text}
            <Cursor cursorColor="red" />
          </p>

          <div className="morph-hero p-1 flex mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
