// src/components/SearchResultsList.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaCalendarAlt, FaClock, FaUser, FaShip } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Opsional, jika tombol "Choose" perlu navigasi

// Props yang diterima dari halaman order
interface SearchResultsListProps {
    type: string;
    origin: string;
    destination: string;
    date: string;
    time: string;
    passengers: string;
}

// Data Hasil Pencarian Placeholder (Ganti dengan fetch API nanti)
const searchResultsData = [
    { id: 1, name: 'Ferry 334B', imageUrl: 'https://placehold.co/400x250/3498db/ffffff?text=Ferry+1', crossingTime: 3, price: 310125, departureTime: '13:30', arrivalTime: '16:30', departureDateFormatted: 'Mon, 24 Mar 2025' }, // Tambah detail waktu & tanggal format
    { id: 2, name: 'Ferry 335B', imageUrl: 'https://placehold.co/400x250/2ecc71/ffffff?text=Ferry+2', crossingTime: 3, price: 370825, departureTime: '14:00', arrivalTime: '17:00', departureDateFormatted: 'Mon, 24 Mar 2025' },
    { id: 3, name: 'Ferry 336B', imageUrl: 'https://placehold.co/400x250/e74c3c/ffffff?text=Ferry+3', crossingTime: 4, price: 420110, departureTime: '15:15', arrivalTime: '19:15', departureDateFormatted: 'Mon, 24 Mar 2025' },
  ];

const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount).replace('Rp', 'IDR');
};

const SearchResultsList: React.FC<SearchResultsListProps> = ({
    type, origin, destination, date, time, passengers
}) => {
    const router = useRouter();

    // --- Format Tanggal untuk Tampilan ---
    const displayDate = React.useMemo(() => {
        if (!date || date === 'N/A') return 'N/A';
        try {
            const [year, month, day] = date.split('-');
            const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            return dateObj.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short' });
        } catch { return date; }
    }, [date]);

    const handleChooseTicket = (ticketId: number) => {
        console.log(`Choosing ticket ID: ${ticketId} for ${passengers} passengers`);
        // Implementasi navigasi ke halaman checkout/detail
        // router.push(`/checkout?ticketId=${ticketId}&passengers=${passengers}...`);
        router.push(
            `/order?type=${type}&origin=${origin}&destination=${destination}&date=${date}&time=${time}&passengers=${passengers}&selectedTicketId=${ticketId}`
        );
        alert(`Ticket ${ticketId} chosen! Implement next step.`);
    };

    // Filter hasil berdasarkan tipe (jika perlu, tapi contoh ini hanya ferry)
    const resultsToDisplay = searchResultsData; // Nanti filter berdasarkan 'type' jika data gabungan

    return (
        <div className="container mx-auto py-8 px-4 max-w-4xl">
            {/* Tampilkan Kriteria Pencarian */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-8 flex flex-wrap justify-between items-center text-sm text-gray-700 border border-gray-200">

                <div className="flex items-center font-medium">
                    <FaShip className="mr-2 text-gray-500" />
                    <span className="capitalize">{type}</span>
                </div>

                <span className="text-gray-300">|</span>

                <div className="flex items-center">
                    <span>{origin}</span>
                    <FaArrowRight className="mx-2 text-gray-400" />
                    <span>{destination}</span>
                </div>

                <span className="text-gray-300">|</span>

                <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-gray-500" />
                    <span>{displayDate}</span>
                </div>

                <span className="text-gray-300">|</span>

                <div className="flex items-center">
                    <FaClock className="mr-2 text-gray-500" />
                    <span>{time}</span>
                </div>

                <span className="text-gray-300">|</span>

                <div className="flex items-center">
                    <FaUser className="mr-2 text-gray-500" />
                    <span>{passengers} Passengers</span>
                </div>

            </div>


            {/* Daftar Hasil Pencarian */}
            <div className="space-y-8">
                {resultsToDisplay.length > 0 ? (
                    resultsToDisplay.map((result) => (
                        <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                            {/* Gambar */}
                            <div className="w-48 md:w-64 flex-shrink-0 relative"> {/* Lebar tetap atau responsif */}
                                <Image
                                    src={result.imageUrl}
                                    alt={result.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            {/* Detail */}
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">{result.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Estimated crossing time is {result.crossingTime} hours
                                    </p>
                                </div>
                                <div className="flex justify-between items-end mt-4">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-600">Total Price</p>
                                        <p className="text-lg font-bold text-red-600">{formatIDR(result.price)}</p>
                                    </div>
                                    <button
                                        onClick={() => handleChooseTicket(result.id)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg text-sm transition duration-150 ease-in-out"
                                    >
                                        Choose ticket
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
                        No routes found matching your criteria for {type}.
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResultsList;