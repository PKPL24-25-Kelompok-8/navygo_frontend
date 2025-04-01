"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';  // Import the Image component

const NavbarGuest = () => {
  return (
    <div className="bg-white py-4 px-8 w-full">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between">
        {/* NavyGo Image Logo */}
        <div>
            <Image
              src="/navygo-logo.svg"
              alt="NavyGo Logo"
              width={150}   // Adjust these values to your design
              height={29}  // Maintaining aspect ratio
              priority //Optional property to improve loading performance
            />
        </div>

        {/* Login and Signup Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <div className="border-2 border-[#2563eb] text-[#2563eb] text-lg font-medium px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
              Log In
            </div>
          </Link>
          <Link href="/signup">
            <div className="bg-[#2563eb] text-white text-lg font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarGuest;