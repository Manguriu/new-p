// function SiteNav() {
//   return (
//     <div className="navbar">
//       <div className="navbar-start navbar-container">
//         <a href="/" className="btn btn-ghost normal-case text-xl navbar-logo">
//           Manguriu
//         </a>
//       </div>
//       <div className="navbar-center hidden sm:flex lg:flex">
//         <ul className="menu menu-horizontal px-1 navbar-menu">
//           <li className="navbar-item">
//             <a href="#about">About</a>
//           </li>
//           <li className="navbar-item ">
//             <a href="#skills">Skills</a>
//           </li>
//           <li className="navbar-item">
//             <a href="#projects">Projects</a>
//           </li>

//           <li className="navbar-item">
//             <a href="#contacts">Contacts</a>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         <button>Resume</button>
//       </div>
//     </div>
//   );
// }

// export default SiteNav;
import { useState } from "react";

function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-start navbar-container">
        <a href="/" className="btn btn-ghost normal-case text-xl navbar-logo">
          Manguriu
        </a>
      </div>

      {/* Responsive Navigation */}
      <div className="sm:hidden">
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        </button>
        {isMenuOpen && (
          <>
            <ul className="responsive-menu">
              <li className="navbar-item">
                <a href="#about">About</a>
              </li>
              <li className="navbar-item">
                <a href="#skills">Skills</a>
              </li>
              <li className="navbar-item">
                <a href="#projects">Projects</a>
              </li>
              <li className="navbar-item">
                <a href="#contacts">Contacts</a>
              </li>
              <li className="navbar-item">
                <a href="/">Resume</a>
              </li>
            </ul>
          </>
        )}
      </div>

      <div className="navbar-center hidden sm:flex lg:flex">
        <ul className="menu menu-horizontal px-1 navbar-menu">
          <li className="navbar-item">
            <a href="#about">About</a>
          </li>
          <li className="navbar-item">
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
      <div className="navbar-end">
        <button>Resume</button>
      </div>
    </div>
  );
}

export default SiteNav;
