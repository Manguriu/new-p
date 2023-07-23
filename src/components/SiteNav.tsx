function SiteNav() {
  return (
    <div className="navbar">
      <div className="navbar-start navbar-container">
        <img
          src="https://lh3.googleusercontent.com/pw/AIL4fc9_NPq9ckSiSyr6IMIqSZJm6Sktm0L8-ulbJGNVJrgQuBwSY1diKYk7Dwer5xW5HWVGew-xCMF3X1Wk78L4UFWISPRlKG-xptaxPud-dvMonWnOheVIRWwcUhf_BDISWhLdK-9J6m_5ApHX7uoyAn8dd_Q9JbpYMnzVa3k74t3BF51HnoSyd-8AWgFGEbA-w2svnbDYcFEYDt2qQlVgdRWkFt-eAzZmVYos7IvBBZtgVshVWEEgj9C3DbE8jjlE2WBTpaL7I4zDxaqcS_51b4QQMWOVFPMsYFU9eNf9t9JrtHQaHlpLTCnWc6Q9gUAzf_Rf5kOz0DHggep1Zw0KVTfqKqvn5cuNt8aIozqFhntjCrAirP7Bwj2wjZ4upQ-TV8T_AXC0oRlnrWhcImQrlb9uxXBb3O9Mg7HEaRNLuF3z1-6sbfczXmqSMyqSrOkOpbWDrmP7bXsghIEoO07F6sA1kHjx-fhtcvBKZge5EiPAq9Gu9GOatK7Ik6hfzRHJI-nL_KDsYY8guarajwgUEWB9fWKOb7i8ZktSITlcNxG85tLtWAJ3PxDAM2XGuld9gVwLUSUG-qShzXr87myXXAhMFgQfA_RAAiHGeqzfmrI-SWJ9LkH1k90f5nS3fH-UzIhvFrzULJG6ya-0ujQb04R-04mB4PWGSGWwE47eMV2wtwUQ7RQVMMN2GEqyp9OsVciBjQfnO_ZjgirSVxmgOC8apkdLlbEK1SN_4ca9palpk4SMitUvHbFnFX5Re55gGxO1iAv9otMJW9MBLd6HU4sefszQmevSVqNTqMUyyYovEycM5Fn9PWMvgkr-c5AZvbL7iBYolVZBp246AdwoQk_2d1vYJNlGYa_s0dNnO-2YGIJdBoYJ9eUvjGTKsku9AmY1xXdVfNEFfXyREOZClW6FgeSpBGZ4YnuaWLTrkjkTjBfp0rNeNRZVV4zMn-g=w63-h60-s-no?authuser=1"
          width={20}
        />
        <a href="/" className="btn btn-ghost normal-case text-xl navbar-logo">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          Manguriu
        </a>
      </div>
      <div className="navbar-center hidden sm:flex lg:flex">
        <ul className="menu menu-horizontal px-1 navbar-menu">
          <li className="navbar-item">
            <a href="#about">About</a>
          </li>
          <li className="navbar-item ">
            <a href="#skills">Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#projects">Projects</a>
          </li>

          <li className="navbar-item">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <button>Resume</button>
      </div> */}
      <div className=" text-base navbar-end" role="none">
        <a
          href="https://drive.google.com/file/d/11TuqYkJHmzkwOhPIvYI97LwRtD8dwnnM/view?usp=drive_link"
          media="print and (resolution:300dpi)"
          target="_blank"
          role="none">
          <button
            className="text-gray-900 group flex w-full items-center  px-2 py-2 text-lg "
            id="headlessui-menu-item-:r5:"
            role="menuitem"
            data-headlessui-state="">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                stroke-width="2"></path>
            </svg>
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default SiteNav;
{
  /* <div className=" text-base " role="none">
  <a
    href="/documents/SimonMwangi.pdf"
    media="print and (resolution:300dpi)"
    target="_blank"
    role="none">
    <button
      className="text-gray-900 group flex w-full items-center  px-2 py-2 text-lg "
      id="headlessui-menu-item-:r5:"
      role="menuitem"
      data-headlessui-state="">
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        stroke-width="1.5"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          stroke-width="2"></path>
      </svg>
      Download
    </button>
  </a>
</div> */
}
