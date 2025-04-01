"use client";

import React, { useState } from 'react';
import NavbarUser from '@/components/NavbarUser';
import Footer from '@/components/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaPrint, FaWallet, FaChevronDown, FaArrowCircleUp, FaArrowCircleDown, FaShip } from 'react-icons/fa';

const transactions = [
    { id: 7, date: 'Sat, 22 Mar 2025', type: 'expense', icon: FaShip, description: 'Ferry 334B', details: 'Merak - Bakauheni', amount: -671000, subtext: 'NavyPay' },
    { id: 6, date: 'Mon, 17 Mar 2025', type: 'income', icon: FaWallet, description: 'NavyPay Top-up', details: null, amount: 10000000, subtext: null },
    { id: 5, date: 'Mon, 17 Mar 2025', type: 'income', icon: FaWallet, description: 'NavyPay Top-up', details: null, amount: 10000000, subtext: null },
    { id: 4, date: 'Mon, 17 Mar 2025', type: 'income', icon: FaWallet, description: 'NavyPay Top-up', details: null, amount: 10000000, subtext: null },
    { id: 3, date: 'Mon, 17 Mar 2025', type: 'income', icon: FaWallet, description: 'NavyPay Top-up', details: null, amount: 10000000, subtext: null },
    { id: 2, date: 'Mon, 17 Mar 2025', type: 'income', icon: FaWallet, description: 'NavyPay Top-up', details: null, amount: 10000000, subtext: null },
    { id: 1, date: 'Sat, 15 Mar 2025', type: 'income', icon: FaWallet, description: 'NavyPay Top-up', details: null, amount: 1000000, subtext: null },
];

const formatIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount).replace('Rp', 'IDR');
};

const NavyPayPage = () => {
    let currentDate = '';

    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const [startDate, endDate] = dateRange;
    const [mode, setMode] = useState<'all' | 'expense' | 'income'>('all');

    const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMode(event.target.value as 'all' | 'expense' | 'income');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <NavbarUser />

            {/* Header NavyPay */}
            <div className="bg-blue-600 text-white p-6 md:p-8 min-h-[200px]">

                <div className="container mx-auto max-w-4xl">
                    <div className="flex justify-between items-center mb-2">
                        <h1 className="text-3xl font-semibold">NavyPay</h1>
                        <button className="border border-white rounded-lg px-12 py-2 text-xl font-medium hover:bg-white hover:text-blue-600 transition-colors">
                            Top-up
                        </button>
                    </div>
                    <p className="text-4xl font-bold">{formatIDR(50329000)}</p>
                </div>
            </div>

            {/* Konten Utama (Card Transaksi) */}
            <div className="container mx-auto max-w-4xl p-4 md:p-0 -mt-15 relative z-10">

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl text-black font-bold mb-6">Transaction History</h2>

                    {/* Filter */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        {/* Filter Tanggal */}
                        <div className="relative w-full md:w-auto">
                            <button
                                className="w-full md:w-auto flex items-center justify-start space-x-2 border border-gray-300 rounded-lg px-6 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                <FaCalendarAlt />
                                <DatePicker
                                    selectsRange={true}
                                    startDate={startDate}
                                    endDate={endDate}
                                    onChange={(update) => setDateRange(update)}
                                    dateFormat="dd/MM/yyyy"
                                    className="bg-transparent outline-none cursor-pointer"
                                    placeholderText="Select Date Range"
                                />
                            </button>
                        </div>
                        {/* Filter Mode */}
                        <div className="relative">
                            <select
                                value={mode}
                                onChange={handleModeChange}
                                className="w-full md:w-auto flex items-center space-x-2 border border-gray-300 rounded-lg px-10 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                <option value="all">
                                    <FaPrint className="inline-block text-gray-500 mr-2" /> All Mode
                                </option>
                                <option value="pemasukan">
                                    <FaArrowCircleUp className="inline-block text-green-600 mr-2" /> Pemasukan
                                </option>
                                <option value="pengeluaran">
                                    <FaArrowCircleDown className="inline-block text-red-600 mr-2" /> Pengeluaran
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* Daftar Transaksi */}
                    <div>
                        {transactions.map((transaction, index) => {
                            const showDateHeader = transaction.date !== currentDate;
                            currentDate = transaction.date;

                            return (
                                <div key={transaction.id}>
                                    {/* Header Tanggal */}
                                    {showDateHeader && (
                                        <p className={`font-bold ${index > 0 ? 'mt-6' : ''} mb-3 text-gray-800`}>
                                            {transaction.date}
                                        </p>
                                    )}

                                    {/* Item Transaksi */}
                                    <div className="flex justify-between items-center border-b border-gray-100 py-4">
                                        {/* Info Kiri (Ikon & Deskripsi) */}
                                        <div className="flex items-center space-x-3">
                                            <transaction.icon className="text-xl text-gray-500" />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                                                {transaction.details && (
                                                    <p className="text-xs text-gray-500">{transaction.details}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Info Kanan (Jumlah & Subteks) */}
                                        <div className="text-right">
                                            <p className={`text-sm font-semibold ${transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'}`}>
                                                {transaction.type === 'income' ? '+' : ''}{formatIDR(transaction.amount)}
                                            </p>
                                            {transaction.subtext && (
                                                <p className="text-xs text-gray-500">{transaction.subtext}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <Footer />
            </div>



        </div>
    );
};

export default NavyPayPage;