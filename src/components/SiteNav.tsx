function SiteNav() {
  return (
    <div className="navbar">
      <div className="navbar-start navbar-container">
        <img src="/src/assets/logo-aviato.png" width={20} />
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
          href="/src/assets/Resume-Brian-Manguriu.pdf"
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
