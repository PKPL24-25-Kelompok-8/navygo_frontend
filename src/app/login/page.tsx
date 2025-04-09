// src/app/login/page.tsx
"use client";

import React from 'react';
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import NavbarLogo from '@/components/NavbarLogo';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50"> {/* Latar belakang abu-abu muda */}
            <NavbarLogo /> {/* Atau Navbar lain jika diperlukan */}

            <div className="relative" style={{ minHeight: '700px' }}>
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/login-bg.svg" // Placeholder for background
                        alt="Background"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>


                {/* Login Box */}
                <div className="relative z-10 flex justify-center items-center mt-8">
                    <div className="bg-white rounded-lg shadow-lg w-[515px] h-[470px] p-8">
                        <h2 className="text-3xl text-black font-bold text-center mb-8">Log In</h2>

                        <form>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-lg text-black font-medium mb-2">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 border border-gray-300 rounded-md text-black"
                                    placeholder="Example: email@navygo.com"
                                />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="password" className="block text-lg text-black font-medium mb-2">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                                        id="password"
                                        className="w-full p-3 border border-gray-300 rounded-md pr-10 text-black"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-3"
                                        aria-label="Show password"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? (
                                            <EyeSlashIcon className="h-7 w-7" aria-hidden="true" />
                                        ) : (
                                            <EyeIcon className="h-7 w-7" aria-hidden="true" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="mb-8">
                                <Link href="/forgot-password" className="text-blue-500 hover:underline text-sm">
                                    Lupa password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md text-lg font-medium transition-colors"
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;