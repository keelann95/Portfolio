import  { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the CV link
  const openCV = () => {
    window.open('https://stephen-curriculum-vitae.tiiny.site', '_blank');
  };
  const openGithub = () => {
    window.open('https://github.com/keelann95', '_blank');
  };
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/stephen-mwaniki-dev', '_blank');
  };

  return (
    <main className="p-5 shadow-lg shadow-gray-800 text-gray-300">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            className="w-36 sm:w-48"
            src="https://see.fontimg.com/api/rf5/KVEA7/ZDc5ODRkNTcxZjQ2NDgyMTg2YjE2MWIzNzg1NDMzMDEudHRm/U3RlcGhlbg/fudged-italic.png?r=fs&h=81&w=1000&fg=FFFFFF&bg=353D4B&tb=1&s=81"
            alt="Stephen"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-6 items-center">
            <li
              onClick={openGithub}
              className="flex items-center gap-2 cursor-pointer hover:font-semibold hover:text-white bg-left-bottom bg-gradient-to-r from-black to-gray-300 bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_2px]  transition-all duration-500 ease-out"
            >
              <FaGithub className="text-lg" /> GitHub
            </li>
            <li
              onClick={openLinkedIn}
              className="flex items-center gap-2 cursor-pointer hover:font-semibold hover:text-white bg-left-bottom bg-gradient-to-r from-black to-gray-300 bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_2px]  transition-all duration-500 ease-out"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </li>
            <li
              onClick={openCV}
              className="hover:font-semibold hover:text-white bg-left-bottom bg-gradient-to-r from-black to-gray-300 bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_2px] cursor-pointer transition-all duration-500 ease-out"
            >
              Curriculum Vitae
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4">
            <li
              onClick={openGithub}
              className="flex items-center gap-2 cursor-pointer hover:font-semibold hover:text-white bg-left-bottom bg-gradient-to-r from-gray-300 to-black bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_2px]  transition-all duration-500 ease-out"
            >
              <FaGithub className="text-lg" /> GitHub
            </li>
            <li
              onClick={openLinkedIn}
              className="flex items-center gap-2 cursor-pointer hover:font-semibold hover:text-white bg-left-bottom bg-gradient-to-r from-gray-300 to-black bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_2px]  transition-all duration-500 ease-out"
            >
              <FaLinkedin className="text-lg" /> LinkedIn
            </li>
            <li
              onClick={openCV}
              className="hover:font-semibold hover:text-white bg-left-bottom bg-gradient-to-r from-gray-300 to-black bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_2px] cursor-pointer transition-all duration-500 ease-out"
            >
              Curriculum Vitae
            </li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default Navbar;
