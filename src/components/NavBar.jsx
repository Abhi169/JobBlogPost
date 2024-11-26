import { useState } from "react";
import "./NavBar.css";

const NavBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="header sticky top-0 z-50 flex flex-col md:flex-row justify-between bg-gray-800 text-white p-4 shadow-lg flex-wrap">
      <div className="logo-container flex justify-center md:justify-start items-center">
        <img className="logo w-14 h-14 m-2" src="./logo.png" alt="site logo" />
        <h1 className="mt-2 md:mt-0 font-bold text-xl md:text-2xl">
          JobBlogPost
        </h1>
      </div>
      <div className="search-bar mt-2 md:mt-0 p-3 flex justify-center md:justify-end items-center w-full md:w-auto flex-wrap">
        <input
          type="text"
          placeholder="Search for Jobs"
          className="p-2 rounded-lg text-black w-64"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 m-2 p-2 rounded-lg text-white hover:bg-blue-700 transition duration-200"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="nav-item mt-3 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
        <ul className="flex flex-col md:flex-row list-none m-6 space-y-2 md:space-y-0 md:space-x-4">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          {/* <li>Sign Up</li> */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
