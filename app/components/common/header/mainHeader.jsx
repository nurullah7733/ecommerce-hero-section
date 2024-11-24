import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

const MainHeader = () => {
  return (
    <div className="h-[70px] bg-white">
      <div className="container mx-auto  ">
        <div className="flex gap-[30px] items-center h-[70px]">
          <Link href="/">
            <Image
              src={"/assets/imgs/alzaf-logo.png"}
              width={130}
              height={40}
              alt="logo"
            />
          </Link>
          {/* search  */}
          <div>
            <div className="relative">
              <input
                className="w-[704px] h-[44px] rounded-[10px] p-2 focus:outline-none text-text-secondary text-sm bg-secondary"
                type="text"
                placeholder="Search Product"
              />
              <div className="absolute top-0 right-0 cursor-pointer flex justify-center items-center bg-text-yellow w-[47px] h-[44px] text-white  rounded-[10px]">
                <IoSearchOutline className="text-lg" />
              </div>
            </div>
          </div>
          {/* cart, profile, favorite and clound img */}
          <div className="flex gap-[12px] items-center">
            <div className="w-8 h-8 rounded-[10px] flex justify-center items-center bg-text-light">
              <FaRegUser className="text-text-secondary" size={18} />
            </div>
            <div className="w-8 h-8 rounded-[10px] flex justify-center items-center bg-text-light">
              <CiHeart className="text-text-secondary" size={18} />
            </div>
            <div className="w-8 h-8 rounded-[10px] flex justify-center items-center bg-text-light">
              <IoCartOutline className="text-text-secondary" size={18} />
            </div>
          </div>

          <div>
            <Image
              src={"/assets/icons/cloud-service.png"}
              width={177}
              height={44}
              alt="clould service"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
