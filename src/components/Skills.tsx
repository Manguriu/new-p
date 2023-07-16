import { motion } from "framer-motion";

function Skills() {
  return (
    <>
      <div className=" mt-20">
        <h2 className="title-p text-center text-4xl title  justify-center flex">
          Skills
        </h2>
        <div className="flex container">
          <div className="card">
            <motion.img
              initial={{
                scale: -0.5,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{
                scale: 1,
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_R4ZDCTfZT2ZjkVn4el_xdwFtljkiwoT5KA&usqp=CAU"
              className=""
            />
            <h2 className="title flex itmes-center justify-center">Laravel</h2>
            <p className="subtitle">
              Introducing the first ever 5G enabled tablet. You've got a tablet
              that let's you play harder and work smarter.
            </p>
          </div>

          <div className="card">
            <motion.img
              initial={{
                scale: -0.5,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{
                scale: 1,
              }}
              src="data:image/png;base64,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"
            />
            <h2 className="title flex itmes-center justify-center">React.js</h2>
            <p className="subtitle">
              Introducing the first ever 5G enabled tablet. You've got a tablet
              that let's you play harder and work smarter.
            </p>
          </div>

          <div className="card">
            <motion.img
              initial={{
                scale: -0.5,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{
                scale: 1,
              }}
              src="data:image/png;base64,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"
            />
            <h2 className="title flex itmes-center justify-center ">Next.js</h2>
            <p className="subtitle">
              Introducing the first ever 5G enabled tablet. You've got a tablet
              that let's you play harder and work smarter.
            </p>
          </div>

          <div className="card">
            <motion.img
              initial={{
                scale: -0.5,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{
                scale: 1,
              }}
              src="data:image/png;base64,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"
            />
            <h2 className="title flex itmes-center justify-center">
              Javascript
            </h2>
            <p className="subtitle">
              Introducing the first ever 5G enabled tablet. You've got a tablet
              that let's you play harder and work smarter.
            </p>
          </div>
          {/* <div className="blob mt-20 p-10 "></div> */}
        </div>
      </div>
    </>
  );
}

export default Skills;
