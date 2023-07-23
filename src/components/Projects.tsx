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
          className=" rounded-lg mx-auto mb-3 md:mb-0 md:w-1/2 h-full"
          src="/src/assets/react.png"
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
          src="/src/assets/lara.png
          "
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
          src="/src/assets/billing.png"
          alt=""
        />
        <div className="summary ml-8">
          <h6 className="title text-2xl mb-3 ">Simple Billing Calculator</h6>
          <p className="subtitle-p">
            a simple billing site focuses on basic expense and income tracking,
            with a clear presentation of the balance. It provides users with a
            convenient way to manage their financial information and gain
            insights into their overall financial health.
          </p>
          <div className="btn-morph mt-6">
            <p className="text-lg mt-5 pt">
              <a
                className="border-l-2 border-bg[#A8A196]"
                href="https://billingsitealpha.netlify.app/">
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
          src="/src/assets/test.png"
          alt=""
        />
        <div className="summary ml-8">
          <h6 className="title text-2xl mb-3 ">Test Data</h6>
          <p className="subtitle-p">
            Welcome to our website, where you can view routing information and
            retrieve data from an API. Provide a brief overview of routing and
            how it works in the context of your website. This could include
            information on the different routes available, how to access them,
            and any important details about the routing process
          </p>
          <div className="btn-morph mt-6">
            <p className="text-lg mt-5 pt">
              <a
                className="border-l-2 border-bg[#A8A196]"
                href="https://next-js-first-xi.vercel.app/">
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
