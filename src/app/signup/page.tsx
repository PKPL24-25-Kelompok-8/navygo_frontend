"use client"; // Diperlukan karena kita akan menggunakan state untuk show/hide password

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarLogo from '@/components/NavbarLogo';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50"> {/* Latar belakang abu-abu muda */}
      <NavbarLogo /> {/* Atau Navbar lain jika diperlukan */}

      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="flex max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">

          {/* Kolom Kiri (Gambar & Branding) - Sembunyikan di layar kecil */}
          <div className="hidden md:flex md:w-1/2 bg-white p-12 flex-col items-center justify-center space-y-6">
            <Image
              src="/boat-logo.svg" // Ganti dengan path gambar boat Anda di folder public
              alt="NavyGo Boat"
              width={350} // Sesuaikan ukuran
              height={150} // Sesuaikan ukuran
              objectFit="contain"
            />
            <Image
              src="/navygo-logo.svg" // Ganti dengan path logo Anda di folder public
              alt="NavyGo Logo"
              width={250} // Sesuaikan ukuran
              height={40} // Sesuaikan ukuran
            />
            <h1 className="text-3xl font-bold text-center text-gray-800 mt-4">
              Book Tickets Easily with NavyGo!
            </h1>
            <p className="text-gray-600 text-center">
              Join now and book sea travel tickets with ease!
            </p>
          </div>

          {/* Kolom Kanan (Form Sign Up) */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Sign Up</h2>
            <p className="text-center text-sm text-gray-600 mb-8">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Log In
              </Link>
            </p>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  autoComplete="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="" // Placeholder dikosongkan, contoh di bawah
                />
                <p className="mt-1 text-xs text-gray-500">Example: Ruby Sigma</p>
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile-number"
                  name="mobile-number"
                  autoComplete="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder=""
                />
                <p className="mt-1 text-xs text-gray-500">Example: +6288888888888</p>
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder=""
                />
                <p className="mt-1 text-xs text-gray-500">Example: email@navygo.com</p>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    required
                    className="w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10" // pr-10 untuk ruang ikon
                    placeholder=""
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <EyeIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
                <p className="mt-1 text-xs text-red-600"> {/* Warna merah untuk persyaratan */}
                  Password should contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.
                </p>
              </div>

              {/* Sign Up Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
                >
                  Sign Up
                </button>
              </div>
            </form>

            {/* Terms and Policy */}
            <p className="mt-6 text-xs text-center text-gray-500">
              By signing up, I agree to NavyGo's{' '}
              <Link href="/terms" className="font-medium text-blue-600 hover:text-blue-500">
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="font-medium text-blue-600 hover:text-blue-500">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;