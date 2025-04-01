"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaUser, FaInfoCircle, FaShip, FaRegClock } from 'react-icons/fa';

// Props yang diterima
interface BookingDetailsProps {
    userName: string;
    passengerCount: number;
    ticketDetails: {
        id: number;
        name: string;
        dateFormatted: string;
        departureTime: string;
        arrivalTime: string;
        origin: string;
        destination: string;
        crossingTime: number;

    };
}

interface TravelerDetail {
    fullName: string;
    mobileNumber: string;
    email: string;
}

const BookingDetailsForm: React.FC<BookingDetailsProps> = ({ userName, passengerCount, ticketDetails }) => {

    // State untuk menyimpan data semua traveler (array)
    const [travelers, setTravelers] = useState<TravelerDetail[]>(() =>
        Array.from({ length: passengerCount }, () => ({
            fullName: '',
            mobileNumber: '',
            email: ''
        }))
    );

    // Handler untuk mengubah data traveler spesifik
    const handleTravelerChange = (index: number, field: keyof TravelerDetail, value: string) => {
        const updatedTravelers = [...travelers];
        updatedTravelers[index] = { ...updatedTravelers[index], [field]: value };
        setTravelers(updatedTravelers);
    };

    const handleSaveTraveler = (index: number) => {
        // TODO: Implementasi logika penyimpanan (misal: validasi, kirim ke state global/API)
        console.log(`Saving details for Traveler ${index + 1}:`, travelers[index]);
        alert(`Details for Traveler ${index + 1} 'saved' (check console). Implement actual save logic.`);
    };

    const handleContinue = () => {
        // TODO: Validasi semua form traveler
        // TODO: Kumpulkan semua data dan navigasi ke halaman pembayaran/konfirmasi
        console.log("All traveler details:", travelers);
        console.log("Selected Ticket:", ticketDetails);
        alert("Continue to next step (Payment/Confirmation). Implement navigation.");
    };

    return (
        <div className="container mx-auto py-8 px-4 max-w-5xl"> {/* Max width lebih besar */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Booking</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Kolom Kiri: Detail Traveler */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Info Login */}
                    <div className="bg-white rounded-lg shadow p-4 flex items-center border border-gray-200">
                        <FaUser className="w-5 h-5 text-gray-500 mr-3" />
                        <span className="text-gray-700">Logged in as <span className="font-semibold">{userName}</span></span>
                    </div>

                    {/* Form untuk setiap traveler */}
                    {travelers.map((traveler, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-5">Traveler {index + 1} Details</h2>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}> {/* Cegah submit default */}
                                <div>
                                    <label htmlFor={`fullName-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id={`fullName-${index}`}
                                        value={traveler.fullName}
                                        onChange={(e) => handleTravelerChange(index, 'fullName', e.target.value)}
                                        className="w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor={`mobileNumber-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                        <input
                                            type="tel"
                                            id={`mobileNumber-${index}`}
                                            value={traveler.mobileNumber}
                                            onChange={(e) => handleTravelerChange(index, 'mobileNumber', e.target.value)}
                                            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`email-${index}`} className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                                        <input
                                            type="email"
                                            id={`email-${index}`}
                                            value={traveler.email}
                                            onChange={(e) => handleTravelerChange(index, 'email', e.target.value)}
                                            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end mt-8">
                                    <button
                                        type="button" // Bukan submit form utama
                                        onClick={() => handleSaveTraveler(index)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-lg text-m transition duration-150 ease-in-out"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    ))}
                </div>

                {/* Kolom Kanan: Ringkasan Tiket */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow p-5 border border-gray-200 sticky top-8"> {/* Sticky top */}
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{ticketDetails.name}</h3>
                        <p className="text-sm text-gray-500 mb-4">{ticketDetails.dateFormatted}</p>

                        {/* Timeline Perjalanan */}
                        {/* Tambahkan padding bawah yang cukup untuk info tambahan */}
                        <div className="relative pl-5 pb-10 border-l-2 border-blue-300 ml-18 min-h-[100px]"> {/* Beri min-height */}

                            {/* Keberangkatan */}
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white border-2 border-blue-500 rounded-full z-10"></div>
                            <div className="mb-8 relative z-0"> {/* Pastikan teks di atas garis */}
                                <p className="text-sm font-semibold text-gray-800">{ticketDetails.departureTime}</p>
                                <p className="text-xs text-gray-500">{ticketDetails.dateFormatted.split(', ')[1]}</p>
                                <p className="text-sm font-medium text-gray-700 mt-1">{ticketDetails.origin}</p>
                            </div>

                            {/* --- MODIFIKASI DI SINI --- */}
                            {/* Durasi & Ikon Kapal (di KIRI garis) */}
                            <div className="absolute top-1/2 transform -translate-y-1/2 right-[108%] text-right">
                                {/* 'right-full mr-4' menempatkan elemen di kiri parent (pl-5) dengan margin */}
                                <div className="flex items-center justify-end text-gray-500 whitespace-nowrap">
                                    <FaShip className="w-4 h-4 mr-2" />
                                    <span className="text-xs text-gray-500">
                                        {Math.floor(ticketDetails.crossingTime / 60)}h {ticketDetails.crossingTime % 60}m
                                    </span>
                                </div>
                            </div>

                            {/* Kedatangan */}
                            <div className="absolute -left-[11px] bottom-0 w-5 h-5 bg-blue-500 rounded-full z-10"></div>
                            <div className="relative z-10 bottom-[-40px]">
                                <p className="text-sm font-semibold text-gray-800">{ticketDetails.arrivalTime}</p>
                                <p className="text-xs text-gray-500">{ticketDetails.dateFormatted.split(', ')[1]}</p>
                                <p className="text-sm font-medium text-gray-700 mt-1">{ticketDetails.destination}</p>
                            </div>
                        </div>

                        {/* Info Tambahan */}
                        <div className="mt-6 space-y-2 border-t border-gray-100 pt-4">
                            <div className="flex items-center text-sm text-gray-600">
                                <FaInfoCircle className="w-4 h-4 text-gray-400 mr-2" />
                                <span>Non-refundable</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <FaInfoCircle className="w-4 h-4 text-gray-400 mr-2" />
                                <span>Reschedule Not Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tombol Continue Utama */}
            <div className="mt-10 ml-36.5 flex justify-center">
                <button
                    onClick={handleContinue}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-lg text-lg transition duration-150 ease-in-out"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default BookingDetailsForm;