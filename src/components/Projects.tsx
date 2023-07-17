import { motion } from "framer-motion";
function Projects() {
  return (
    <div className="mt-20">
      <h2 className="title-p text-center text-4xl title  justify-center flex">
        PROJECTS
      </h2>
      {/* line accross the project */}
      <div className="w-full absolute top-[30%] bg-[#1D5D9B]/20 left-0 h-[500px] -skew-y-12" />
      <div className="mt-20 mb-5 mx-w-2xl md:flex my-20 ">
        <motion.img
          initial={{
            x: 200,
            opacity: -1,
            scale: 0.5,
          }}
          transition={{
            duration: 2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          className="rounded-lg mx-auto mb-3 md:mb-0 md:w-1/2 h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_R4ZDCTfZT2ZjkVn4el_xdwFtljkiwoT5KA&usqp=CAU"
          alt=""
        />
        <div className="summary ml-8">
          <h6 className=" title text-2xl mb-3 ">React Emmorce App</h6>
          <p className="subtitle-p">
            Front-end e-commerce development encompasses responsive design,
            product catalog display, shopping cart functionality, checkout
            process facilitation, user authentication and account management,
            payment gateway integration, dynamic user interactions.
          </p>
          <div className="btn-morph mt-6">
            <p className="text-lg mt-5 pt">
              <a
                className="border-l-2 border-bg[#A8A196]"
                href="https://github.com/Manguriu/ecom-react-app">
                Go to ..
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-5 mx-w-4xl md:flex my-20">
        <motion.img
          initial={{
            x: -200,
            opacity: -1,
            scale: 0.5,
          }}
          transition={{
            duration: 2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          className="rounded-lg mx-auto mb-3 md:mb-0 md:w-1/2 h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_R4ZDCTfZT2ZjkVn4el_xdwFtljkiwoT5KA&usqp=CAU"
          alt=""
        />
        <div className="summary ml-8">
          <h6 className="title text-2xl mb-3 ">Ecom Backend Laravel</h6>
          <p className="subtitle-p ">
            The "Ecom-backend" project is a backend implementation for an
            e-commerce application. It focuses on server-side functionalities,
            including user management for authentication and authorization,
          </p>
          <div className="btn-morph mt-6">
            <p className="text-lg mt-5 pt">
              <a
                className="border-l-2 border-bg[#A8A196]"
                href="https://github.com/Manguriu/Ecom-backend">
                Go to ..
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-5 mx-w-4xl md:flex my-20">
        <motion.img
          initial={{
            x: 200,
            opacity: -1,
            scale: 0.5,
          }}
          transition={{
            duration: 2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          className="rounded-lg mx-auto mb-3 md:mb-0 md:w-1/2 h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_R4ZDCTfZT2ZjkVn4el_xdwFtljkiwoT5KA&usqp=CAU"
          alt=""
        />
        <div className="summary ml-8">
          <h6 className="title text-2xl mb-3 ">Something</h6>
          <p className="subtitle-p">
            Introducing the first ever 5G enabled tablet. You've got a tablet
            that let's you play harder and work smarter.Introducing the first
            ever 5G enabled tablet. You've got a tablet that let's you play
            harder and work smarter.
          </p>
          <div className="btn-morph mt-6">
            <p className="text-lg mt-5 pt">
              <a className="border-l-2 border-bg[#A8A196]" href="">
                Go to ..
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-5 mx-w-4xl md:flex my-20">
        <motion.img
          initial={{
            x: -200,
            opacity: -1,
            scale: 0.5,
          }}
          transition={{
            duration: 2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          className="rounded-lg mx-auto mb-3 md:mb-0 md:w-1/2 h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_R4ZDCTfZT2ZjkVn4el_xdwFtljkiwoT5KA&usqp=CAU"
          alt=""
        />
        <div className="summary ml-8">
          <h6 className="title text-2xl mb-3 ">Something</h6>
          <p className="subtitle-p">
            Introducing the first ever 5G enabled tablet. You've got a tablet
            that let's you play harder and work smarter.Introducing the first
            ever 5G enabled tablet. You've got a tablet that let's you play
            harder and work smarter.
          </p>
          <div className="btn-morph mt-6">
            <p className="text-lg mt-5 pt">
              <a className="border-l-2 border-bg[#A8A196]" href="">
                Go to ..
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
