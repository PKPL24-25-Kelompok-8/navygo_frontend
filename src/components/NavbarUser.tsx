"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';  // Import user icon

const NavbarUser = () => {
  return (
    <div className="bg-white py-4 px-8 w-full">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
        {/* NavyGo Image Logo */}
        <div>
          <Link href="/">
            <Image
              src="/navygo-logo.svg"
              alt="NavyGo Logo"
              width={150}
              height={29}
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-18"> {/* Reduced space-x for tighter spacing */}
          <Link href="/order" className="text-[#2563eb] text-lg font-medium hover:underline">
            Order
          </Link>
          <Link href="/active" className="text-[#2563eb] text-lg font-medium hover:underline">
            Active
          </Link>
          <Link href="/history" className="text-[#2563eb] text-lg font-medium hover:underline">
            History
          </Link>
          <Link href="/navypay" className="text-[#2563eb] text-lg font-medium hover:underline">
            NavyPay
          </Link>

          {/* User Profile Button */}
          <Link href="/profile">
            <div className="border-2 border-[#2563eb] text-[#2563eb] text-lg font-medium px-3 py-1 rounded-lg flex items-center space-x-2 hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
            <FaUserCircle className="text-xl" /> {/* Use React Icons */}
              <span>Ruby Sigma</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;