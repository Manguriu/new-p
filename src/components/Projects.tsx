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
          src="https://lh3.googleusercontent.com/pw/AIL4fc-9taM6c0l8UyN4N5e--3tgLeZ1sVNlzOnTauVA-P1FJgCR73JaXpwSRidMHYHlp07OOGtaAHM_xXyguk48EUR4IdMLmbeae6-OQNV0KXEdzYctjUQPTrcufOu3DCftO10OswBBMaW4-NRgzE4iThQEQWLYzmULcg5w-XlkWIl49yXAJ4h6J4NR9LauurIT45AXNf2KWEUnnwVmtsP7QB7Kkf2KiBPV-aDoK9MYHRe-5E60skGaGRI5WDoC4-nJYhmV2Os60fBpxh2pUNiAl49hngSuBysXAuqsGWeN0THGNIihM6pO65cLy3LXbtgncQWTf5X-tOZqfxbeEbC9SlJtQNwwJU8TxoRSqY_6UX6rZe_7uSyqc88sI9PMo3w4LPxDudzDn3LtCAJrzVoKeEmEKUuzk1TOleXaYfKLkh34Uhm85J0AgY-qPDkozmSbW1bDMV_cMJzG1lkj7p5aE-qlcCKOQs9bzCah0aEFs4uUYN0eJHIV1eA8CvQS_8-d5LFkqP-x0evjIGEaMeGICfoAprx0DoQemFa14ygAASsx4BOoKVhyXWOhFE3pGRh3YUz5tTmDqq7x7y7dQitzEPTNTbBLo5qNYQ0crvkbz9D4RPH4TsHflWGW2fE9fVzPeFTK2YSCg5kcWWZ2G3yi0ZOLLB_tIXG6Z_EDq2pvvnJsn-blwANhJY4Rvt5egGaTu4NVSjU9nigMwmWYmidCmzGkQkQOeaQlDwqjxHIWiKVV7MFNLE4dTURvpinSTRXGW-ig6RVki-t3nI732CjJWYCGxL918Vk2ON1F44NtxAJs9cMEScTr4pxZe-HMQ5ay21Y8yrBMv9fYVFhkULwJV8hVN7WAEmQt1DEY5kLqsNsY2Tm7Dk1GVm9OPwiB4F-1qGVQDNCCPFJ97yfeytfQLMt0TzRz0v4bVqshhlRb3opscv3ygbgi1-ex3B78nxs=w1769-h995-s-no?authuser=1"
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
          src="https://lh3.googleusercontent.com/pw/AIL4fc_fBaU4x0TLX4uUY197dbfTYpJ21I4-3B2_Bf0qGBztoHKs4tfvonZe9S8bUHt0P_n9zRnfaT1sfwzK_mMcygALzxu6iX2scsKdYS0MiphAVAa8NhyAO_3r5m5hKuy9LOVvf-__rvbhSns9_kziIiRvlttP4B_kT_PbpkC7PtUtD222w7scjTgdF3gcRyK_02ByVvy4Yqo23gil0dd9E7W0wacX7AbFWGqq9wG4fcVe4Oh9-DgIhrzt_z_rWZi_qQki5VaSSGKY5C3xgp-OlUV6UzX3sPJZgsC38LGfe8BrK9pc5EApQZBThe5wNx4wDpkXioBWCJCgAGE6fmN7SI-Q5jMQCReVlOPY1v2-9YMLQ20NXCS_qZNDoKcH7nofcgrVYDQBJC2KSPNXuQD7hjnpzmfAVGbuRmjsnzIBWlfvFGi07vanSAZh8DOtvJNFV8spSyKwUr3aImG666n7rY6IrulG0RCWv_1dPHLnJI_7e3fKrA_dG_-f5amBlNNa9ga2ikzF3RgsIEnFapwzJXTN2tqi80z2zfmZEVbNGiiRWuL64rQNo9vwroCHm2wo5XZu__YfbeMxaxJvD4usBDqXQaU3Gq2zHvqkpbJQXksmXPbMwnqNexczYg29_ClDSpPZ6a_mHa-XNMJ4V-p35JMK7MIXEgTecCVe5oCy0IqIX8037KkPVw0AkeZn5-edbJemW6Q5Ntu04qxRfe8wqutiP9Hxk8p68ItmztsEP5g2UHDCIQRt9rbellbUmmpwod2qgYAT7tA26Ezq6LrM6xv-KaEuHj4J-82xkn7ya-Oki1sAdATjUCLlzkrztoc3o6-6FkUNCRoblHbBMmm4t9CgDsDmT-fs99bqdMH0UIWgjKyq3pKGhOs3L1TVMccGvovdGHbtYQgGATfxjH1UusPIT1MTkuwDaJcxvCZsC22R8uEwKhl6Ti0S5xzMSgo=w718-h404-no?authuser=1
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
          src="https://lh3.googleusercontent.com/pw/AIL4fc8GPEcLgkwzOH-Bm0fhaVVfCfq4dCPD8m0Vg4YBcrTAYAI5bgjwHtnkdNVpSDOTz6Ed82C4b_e6oxfUoC-8DrYSQ-BzRfg12CRwq1STkA3thiumhqe74YSX8UM4mdRAmS9dh7h-a49nY_vNvFL3LzA1maXO9kTbJaMSX8KihXALQ1frt0kvfMJNW3twtCF9p45PRdRzfIT8OqpIzcqDc6mynUF2QJEp1O-oBwixOIJZFEvPUDMfhm6n8krSqx18NnncMrJn5eOLkvMWVxvs-oAEwuxt-MTEy5TcMxJnEGNkdCN6rKrnPo2L5tDLZhJuAnArfjXNRxiwg8fOW9dVoiOrBs5pdM8UWF8t6s8G7DWngq4V_xOfbff6uHRewtivPr-knGuG01drz-ku9jLiUq12CFT4WuanMl_0-d7nlvH3ixIs36Uhje4rUGafhfuo58SFIzmyoZLo8qv06p3bk_MMo28ugsc2xiI5uIbrAcc1UulSMAZfLY5LGgAd8t0SryBAv67R3zIWR2rF3TN-sYwWIrDSH5w8bUfijGdF5YgmqwEwLujHBpCqB5jqTjSIWGvRwGc7-yXDTVeni7aL8SdJdf-iWlQz7E1WJDPI_NN2aBjDCKe7jBcVT2HrnRgvnFBVktgY73qoTQtLHR8tf10aBA0udvTlBeH2cnM6BoqzvqyoeBEHSDPpdhLD-C0PmATXkwpg2PqUUuk8iE_6VljyzWDgkxxnufHHSgQ_ferbC-rn7UENdV3fpq0pnhIWRALHGTB92jg8GFMGfQSANuHAIdUuAmdvCti-934Lus4B5pf2Nr2NuQvDxE_Jg8tsdcEIP0w8ZabME0XKE9g28pIrh5ykfD7glxUbFNQe9rC0GKCeLkj0DHK3sYwpFJxuOtk-Tm8oBdjac0itzvQKNximqFuDg-tghCHCzjX_8qA1-hE7wKmarkhnjsgILFY=w1769-h995-s-no?authuser=1"
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
          src="https://lh3.googleusercontent.com/pw/AIL4fc_byEfh1NPj2_WrJuKUquWvFnwZf4X7GWuDjmOkuFRX7LLhEClhbYygezxRpVqIjv6LaB_TgPViCp14Jp4MarDl2neg2abiuDtbwkaiRrLHNRq1ZPiSM--HgZDfaZ7msEHMbMkQWGRHLHrABI0qIwBcLpcOA9MfVq-SJ9stzc8r4ALob5wGFv7vd98cKOlhxw7L7D8Yrm9fn1kKqhYnb2rEYFhD2yCki2iH9HnWWEG4ogDxwnpoM7grmDQyVACTgRkfzhdzBQn1QLzmO9R0nd1eUdFoZDoFJjB2DmGs-p-nJto-grOVa94gUaNghXn_6iIKA0ImZRV8qPl_m_KYG2ApozjjZ66R4X5VSSKHCk2XHRrz9X3860lZUbLw9RW_H5kiBDtcVOBVzqVFKL5ech7SXHmLspr5PeWzhjda2ZAqET-60ECtb3gnHbqzG8eFrWYRQK7PN8DH5ju-HULvdzAET7K4RHF3MU_xoYN6RQSoU26Ylo4P8oDhwd7S0Wzp7hjwosXkFaSZ33ELuiTtJwHSrswa1KDdC_pWwaAnC-IDsIANb6afPbLMwfw5yrKJiHAKZpWyuTTFfsFjc3-1NvKD-9b1IiY2ugbFI5Kwp8XSRbXKnp5Tx0gFOzVRk8YFiNviGlC19SW6ejJ3wnYItph4FMaocVGd_-g3pYqhmsck-no7tpCxsZCdCENoPEkitrSq3OGXAQS6S3iwAS11v09RofvIG7_OWsFtSTh4Tl68_2CfqQa3uNFE2lFhNM-P_oFFL2TRh9-83hGESE7bIV1sr_0pkJrvqj0StB_Vhf2we0UY_VeE5rzx8Q7Xrk77fFRr7FBtd-tbEGFOlHn0SYKvlsK4zHB33SqBSRY1z4O4wUKpJPPjM6_F78fXDR7V_B36fd46eMglooQ416H69LL13ItGsKpSJrIlnyLRvXvbqJ7hZGwU0WWMxtPOrE0=w1769-h995-s-no?authuser=1"
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
