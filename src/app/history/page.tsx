"use client";

import React from 'react';
import NavbarUser from '@/components/NavbarUser';
import { FaShip, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Footer from '@/components/Footer';

const bookingHistory = [
    { id: 3, monthYear: 'March 2025', bookingCode: 'FR334BAR2240325133018026', route: 'Merak → Bakauheni', travelInsurance: true, price: 671000, status: 'Success' },
    { id: 2, monthYear: 'March 2025', bookingCode: 'FR334BAR2240325133018015', route: 'Merak → Bakauheni', travelInsurance: true, price: 671000, status: 'Failed' },
    { id: 1, monthYear: 'Feb 2025', bookingCode: 'FR336BAR2240325133024014', route: 'Merak → Bakauheni', travelInsurance: true, price: 902200, status: 'Failed' },
];

const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount).replace('Rp', 'IDR');
};

const HistoryPage = () => {
    let currentMonthYear = '';

    return (
        <div className="min-h-screen bg-gray-100 pb-10">
            < NavbarUser />

            <main className="container mx-auto py-8 px-4 max-w-4xl">

                {/* Filter Periode */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                        Past 90 Days
                    </button>
                    <button className="bg-white border border-gray-300 text-gray-700 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50">
                        March 2025
                    </button>
                    <button className="bg-white border border-gray-300 text-gray-700 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50">
                        Feb 2025
                    </button>
                    <button className="bg-white border border-gray-300 text-gray-700 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50">
                        Customize Date
                    </button>
                </div>

                {/* Daftar Riwayat Booking */}
                <div>
                    {bookingHistory.map((booking, index) => {
                        const showMonthHeader = booking.monthYear !== currentMonthYear;
                        currentMonthYear = booking.monthYear;

                        return (
                            <div key={booking.id}>
                                {/* Header Bulan/Tahun */}
                                {showMonthHeader && (
                                    <h2 className={`text-xl font-bold text-gray-800 ${index > 0 ? 'mt-8' : ''} mb-4`}>
                                        {booking.monthYear}
                                    </h2>
                                )}

                                {/* Kartu Riwayat Booking */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                                    {/* Bagian Atas: Kode Booking & Harga */}
                                    <div className="flex justify-between items-center p-4 border-b border-gray-100">
                                        <div>
                                            <span className="text-sm text-gray-500">Booking Code </span>
                                            <span className="font-semibold text-gray-800">{booking.bookingCode}</span>
                                        </div>
                                        <div className="font-semibold text-gray-800">{formatIDR(booking.price)}</div>
                                    </div>

                                    {/* Bagian Tengah: Rute & Asuransi */}
                                    <div className="bg-gray-100 p-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2 text-sm text-gray-700">
                                                <FaShip className="w-4 h-4 text-gray-500" />
                                                <span>{booking.route}</span>
                                            </div>
                                            {booking.travelInsurance && (
                                                <div className="flex items-center space-x-2 text-sm text-gray-700">
                                                    {/* Ganti ikon jika perlu */}
                                                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                                                    <span>Travel Insurance</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Bagian Bawah: Status */}
                                    <div className="p-4">
                                        {booking.status === 'Success' ? (
                                            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-2xs font-medium">
                                                Success
                                            </span>
                                        ) : (
                                            <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-2xs font-medium">
                                                Failed
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HistoryPage;