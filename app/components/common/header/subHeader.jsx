"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Bangla");

  const options = ["English", "Bangla", "Hindi", "Urdu"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="bg-primary h-[25px] ">
      <div className="container mx-auto  ">
        <div className="flex justify-between items-center h-[25px]">
          <div className="flex text-text-primary text-xs">
            <div className="relative inline-block  w-14 text-text-yellow">
              {/* Dropdown Language */}
              <div
                className="flex justify-between items-center   cursor-pointer"
                onMouseEnter={handleToggle}
              >
                <span>{selectedOption}</span>
                <span>
                  {isOpen ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
                </span>
              </div>

              {/* Dropdown Options */}
              {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-primary border border-gray-300 mt-1 z-10">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className="px-1 py-1 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="ml-[47px]">
              <p className="f">Help Center</p>
            </div>
            <div className="ml-[32px]">
              <p>Help line: 0964781656</p>
            </div>
          </div>
          <div className="flex text-text-primary text-xs">
            <div>
              <p>Become a Seller</p>
            </div>
            <div>
              <p className="ml-[30px]">Order Track</p>
            </div>
            <div className="text-text-yellow ml-[38px]">
              <Link href="/register">Sign up</Link>
              <span> / </span>
              <Link href="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
