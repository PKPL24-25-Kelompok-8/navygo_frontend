// src/components/OrderForm.tsx
"use client"; // Komponen ini interaktif

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Gunakan next/navigation untuk App Router
import { FaArrowRight, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';

interface OrderFormProps {
  transportationType: string; // Menerima tipe transportasi dari parent
}

// Contoh data kota (nantinya ambil dari API)
const cities = ['Merak', 'Bakauheni', 'Surabaya', 'Jakarta', 'Makassar', 'Singapore', 'Batam'];

// Menit yang tersedia
const availableMinutes = ['00', '15', '30', '45'];

const OrderForm: React.FC<OrderFormProps> = ({ transportationType }) => {
  const router = useRouter();

  // State lokal untuk form ini
  const [origin, setOrigin] = useState(cities[0]); // Default ke kota pertama
  const [destination, setDestination] = useState(cities[1]); // Default ke kota kedua
  const [departureDate, setDepartureDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [departureHour, setDepartureHour] = useState('13');
  const [departureMinute, setDepartureMinute] = useState('30');
  const [passengers, setPassengers] = useState(1);

  const handleFind = () => {
    const departureTime = `${departureHour}:${departureMinute}`;
    console.log('Searching for:', { type: transportationType, origin, destination, departureDate, departureTime, passengers });
    // Navigasi ke halaman hasil pencarian (buat halaman ini nanti)
    router.push(
      `/order?type=${transportationType}&origin=${origin}&destination=${destination}&date=${departureDate}&time=${departureTime}&passengers=${passengers}`
    );
  };

  const handlePassengerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) value = 1;
    const clampedValue = Math.max(1, Math.min(99, value)); // Batasi 1-99
    setPassengers(clampedValue);
  };

  // Filter kota tujuan agar tidak sama dengan kota asal
  const availableDestinations = cities.filter(city => city !== origin);
  // Filter kota asal agar tidak sama dengan kota tujuan
  const availableOrigins = cities.filter(city => city !== destination);

  // Set destination ke kota pertama yang valid jika origin berubah dan destination menjadi tidak valid
  React.useEffect(() => {
    if (!availableDestinations.includes(destination)) {
      setDestination(availableDestinations[0] || ''); // Set ke yg pertama atau string kosong jika tidak ada
    }
  }, [origin, availableDestinations, destination]); // Tambahkan destination ke dependency

  // Set origin ke kota pertama yang valid jika destination berubah dan origin menjadi tidak valid
   React.useEffect(() => {
    if (!availableOrigins.includes(origin)) {
      setOrigin(availableOrigins[0] || ''); // Set ke yg pertama atau string kosong jika tidak ada
    }
  }, [destination, availableOrigins, origin]); // Tambahkan origin ke dependency


  return (
    // Kartu Form Pencarian di Kanan
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-sm md:max-w-md z-10 space-y-5">
      {/* Input Origin & Destination */}
      <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between text-gray-800 font-medium">
        <select
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="bg-transparent w-full focus:outline-none mr-2 cursor-pointer"
        >
          {availableOrigins.map(city => <option key={`origin-${city}`} value={city}>{city}</option>)}
        </select>
        <FaArrowRight className="text-gray-500 mx-2 flex-shrink-0"/>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="bg-transparent w-full focus:outline-none ml-2 cursor-pointer text-left" // Ganti text-right ke text-left atau hapus
        >
          {availableDestinations.map(city => <option key={`dest-${city}`} value={city}>{city}</option>)}
        </select>
      </div>

      {/* Input Tanggal & Waktu */}
      <div className="bg-gray-100 rounded-lg p-3 flex items-center text-gray-800 font-medium">
        <FaCalendarAlt className="text-gray-500 mr-3"/>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="bg-transparent focus:outline-none flex-grow mr-2"
          min={new Date().toISOString().split('T')[0]} // Format YYYY-MM-DD
        />
        <span className="border-l border-gray-300 h-5 mx-3"></span> {/* Garis pemisah */}
        <FaClock className="text-gray-500 mr-2"/>
        {/* Dropdown Jam */}
        <select
          value={departureHour}
          onChange={(e) => setDepartureHour(e.target.value)}
          className="bg-transparent focus:outline-none cursor-pointer appearance-none"
        >
          {[...Array(24).keys()].map(hour => {
            const hourStr = hour.toString().padStart(2, '0');
            return <option key={`hour-${hourStr}`} value={hourStr}>{hourStr}</option>;
          })}
        </select>
        <span className="mx-1">:</span> {/* Pemisah jam & menit */}
        {/* Dropdown Menit */}
        <select
          value={departureMinute}
          onChange={(e) => setDepartureMinute(e.target.value)}
          className="bg-transparent focus:outline-none cursor-pointer appearance-none"
        >
          {availableMinutes.map(minute => (
            <option key={`min-${minute}`} value={minute}>{minute}</option>
          ))}
        </select>
      </div>

      {/* Input Penumpang */}
      <div className="bg-gray-100 rounded-lg p-3 flex items-center text-gray-800 font-medium">
        <FaUser className="text-gray-500 mr-3"/>
        <input
          type="number"
          value={passengers}
          onChange={handlePassengerChange}
          min="1"
          max="99"
          className="bg-transparent focus:outline-none w-16 text-center"
        />
        <span> Passengers</span>
      </div>

      {/* Tombol Find */}
      <button
        onClick={handleFind}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        type="button"
      >
        Find
      </button>
    </div>
  );
};

export default OrderForm;