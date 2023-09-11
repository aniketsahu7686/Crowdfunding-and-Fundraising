import React from "react";
import "./Navbar.css";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h2>By VIT-AP</h2>
        </div>
        {/* menu links */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Browse Fundraisers</a>
            </li>
            <li>
            <span className="arrow">
                Fundraise For <MdArrowDropDown />
              </span>
                
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">
                <AiOutlineSearch />
                Search
              </a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <button className="chat-1">
                <BsWhatsapp /> Chat
              </button>
              <button className="chat-2">Start a Fundraiser</button>
              <a href="#" className="sign-in">
                {" "}
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
