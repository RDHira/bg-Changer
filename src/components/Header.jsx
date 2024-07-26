
import React from "react";

function Header() {
 
  return (
   <>
    <nav className="">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 font-serif">
        <div>
          <a className="flex gap-4 items-center" href="#">
            <img src="./public/vite.svg" alt="" />
            <h1 className="text-white text-3xl font-bold">Hackathon</h1>
            {/* <input className="w-80 ml-5 p-1 rounded-md border-none bg-gray-200" type="text" name="search" placeholder="search your words!!" /> */}
          </a>
        </div>
        {/* nav-menu */}
        <div className="text-white text-xl space-x-7">
          <a className="hover:text-gray-300" href="#home">Home</a>
          <a className="hover:text-gray-300"  href="#technology">Technology</a>
          <a className="hover:text-gray-300"  href="#projects">Projects</a>
          <a className="hover:text-gray-300"  href="#download">Download</a>
          <a className="hover:text-gray-300"  href="#contact">Contact Us</a>
          <a className="hover:text-gray-300"   href="#about">About Me</a>
        </div>
      </div>
    </nav>
   </>
  );
}

export default Header;
