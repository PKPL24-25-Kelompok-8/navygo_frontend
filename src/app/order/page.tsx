// src/app/order/page.tsx
"use client";

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import NavbarUser from '@/components/NavbarUser';
import Footer from '@/components/Footer';
import { FaChevronDown, FaTicketAlt } from 'react-icons/fa';
import OrderForm from '@/components/OrderForm';
import SearchResultsList from '@/components/SearchResultsList';
import BookingDetailsForm from '@/components/BookingDetailsForm';

const validTransportTypes = ['ferry', 'cruise', 'speedboat'];

const searchResultsData = [
  { id: 1, name: 'Ferry 334B', crossingTime: 180, price: 310125, departureTime: '13:30', arrivalTime: '16:30', departureDateFormatted: 'Mon, 24 Mar 2025', origin: 'Merak', destination: 'Bakauheni' },
  { id: 2, name: 'Ferry 335B', crossingTime: 180, price: 370825, departureTime: '14:00', arrivalTime: '17:00', departureDateFormatted: 'Mon, 24 Mar 2025', origin: 'Merak', destination: 'Bakauheni' },
  { id: 3, name: 'Ferry 336B', crossingTime: 240, price: 420110, departureTime: '15:15', arrivalTime: '19:15', departureDateFormatted: 'Mon, 24 Mar 2025', origin: 'Merak', destination: 'Bakauheni' },
];

// --- Komponen Konten untuk Membaca Query Params ---
const OrderContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // --- Baca SEMUA Parameter ---
  const transportationType = searchParams.get('type');
  const originParam = searchParams.get('origin');
  const destinationParam = searchParams.get('destination');
  const dateParam = searchParams.get('date');
  const timeParam = searchParams.get('time');
  const passengersParam = searchParams.get('passengers');
  const selectedTicketIdParam = searchParams.get('selectedTicketId');

  // --- Tentukan State Halaman ---
  let pageState: 'SELECT_MODE' | 'SHOW_FORM' | 'SHOW_RESULTS' | 'BOOKING_DETAILS';

  if (transportationType && validTransportTypes.includes(transportationType) && originParam && destinationParam && dateParam && timeParam && passengersParam && selectedTicketIdParam) {
    // SEMUA parameter ADA, termasuk selectedTicketId -> tampilkan detail booking
    pageState = 'BOOKING_DETAILS';
  } else if (transportationType && validTransportTypes.includes(transportationType) && originParam && destinationParam && dateParam && timeParam && passengersParam) {
    // Parameter pencarian ada, TAPI selectedTicketId BELUM ADA -> tampilkan hasil
    pageState = 'SHOW_RESULTS';
  } else if (transportationType && validTransportTypes.includes(transportationType)) {
    // Hanya tipe transportasi yang ada -> tampilkan form
    pageState = 'SHOW_FORM';
  } else {
    // Tidak ada tipe atau tipe tidak valid -> tampilkan pemilihan mode
    pageState = 'SELECT_MODE';
  }

  // State untuk dropdown pemilihan mode (hanya jika pageState = 'SELECT_MODE')
  const [selectedMode, setSelectedMode] = useState<string>('');

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMode(e.target.value);
  };

  const handleNextClick = () => {
    if (selectedMode) {
      router.push(`/order?type=${selectedMode}`);
    } else {
      alert("Please select a transportation mode!");
    }
  };

  // --- Ambil Detail Tiket yang Dipilih (Contoh) ---
  // TODO: Ganti ini dengan logika fetch data tiket berdasarkan ID jika perlu
  const selectedTicket = pageState === 'BOOKING_DETAILS'
    ? searchResultsData.find(ticket => ticket.id.toString() === selectedTicketIdParam)
    : null;

  // Jika state BOOKING_DETAILS tapi tiket tidak ditemukan, redirect (atau tampilkan error)
  if (pageState === 'BOOKING_DETAILS' && !selectedTicket) {
    console.error("Selected ticket not found!");
    // Redirect atau tampilkan pesan error, contoh redirect:
    // React.useEffect(() => { router.replace('/order'); }, [router]);
    return <div className="flex justify-center items-center h-screen">Error: Selected ticket not found. Redirecting...</div>;
  }

  // --- Tentukan Data Dinamis untuk Hero ---
  let heroImage: string = "/order1-bg.svg"; // Default
  let heroTitle: string = "Choose your";
  let heroSubtitleLine1: string = "sea transportation mode";
  let heroSubtitleLine2: string | null = null;

  // Update hero berdasarkan transportationType HANYA jika form atau hasil ditampilkan
  if (pageState === 'SHOW_FORM' || pageState === 'SHOW_RESULTS') {
    switch (transportationType) {
      case 'ferry':
        heroImage = "/ferry-bg.svg"; // Ganti dengan path gambar Anda
        heroTitle = "Ferry";
        heroSubtitleLine1 = "Comfortable & Affordable";
        heroSubtitleLine2 = "Sea Journey";
        break;
      case 'cruise':
        heroImage = "/cruise-bg.svg"; // Ganti dengan path gambar Anda
        heroTitle = "Cruise Ship";
        heroSubtitleLine1 = "Your Ultimate";
        heroSubtitleLine2 = "Sea Adventure Awaits";
        break;
      case 'speedboat':
        heroImage = "/speedboat-bg.svg"; // Ganti dengan path gambar Anda
        heroTitle = "Speedboat";
        heroSubtitleLine1 = "Fast & Exciting";
        heroSubtitleLine2 = "Island Hopping";
        break;
      // Tidak perlu default di sini karena sudah ditangani oleh pageState
    }
  }

  return (
    <main>
      {/* Bagian Hero HANYA ditampilkan jika BUKAN state hasil pencarian */}
      {pageState !== 'SHOW_RESULTS' && pageState !== 'BOOKING_DETAILS' && (
        <section className="relative w-full h-[703px]">
          <Image
            src={heroImage}
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          // unoptimized={heroImage.startsWith('https://placehold.co')} // Jika pakai placeholder external
          />
          <div className={`absolute inset-0 ${pageState === 'SHOW_FORM' ? 'bg-black/20' : ''}`}></div>

          <div className="absolute inset-0 flex items-center justify-between max-w-[1080px] mx-auto px-4 md:px-8">
            {/* Teks Overlay */}
            <div className="text-white z-10 max-w-lg">
              <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg mb-2">{heroTitle}</h1>
              <p className="text-xl md:text-2xl font-light drop-shadow-lg">{heroSubtitleLine1}</p>
              {heroSubtitleLine2 && (
                <p className="text-xl md:text-2xl font-light drop-shadow-lg">{heroSubtitleLine2}</p>
              )}
            </div>

            {/* Kartu Pilihan ATAU Form Pencarian */}
            {pageState === 'SELECT_MODE' ? (
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-xs md:max-w-sm z-10">
                <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">Sea Transportation Mode</h3>
                <div className="relative mb-6">
                  <select
                    className="w-full appearance-none bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 cursor-pointer"
                    value={selectedMode}
                    onChange={handleModeChange}
                  >
                    <option value="" disabled>Choose here</option>
                    <option value="ferry">Ferry</option>
                    <option value="cruise">Cruise Ship</option>
                    <option value="speedboat">Speedboat</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                    <FaChevronDown className="h-4 w-4" />
                  </div>
                </div>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  type="button"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
            ) : ( // Hanya tampilkan form jika state = SHOW_FORM
              pageState === 'SHOW_FORM' && transportationType &&
              <OrderForm transportationType={transportationType} />
            )}
          </div>
        </section>
      )}

      {/* Tampilkan Hasil Pencarian jika state = SHOW_RESULTS */}
      {pageState === 'SHOW_RESULTS' && transportationType && originParam && destinationParam && dateParam && timeParam && passengersParam && (
        <SearchResultsList
          type={transportationType}
          origin={originParam}
          destination={destinationParam}
          date={dateParam}
          time={timeParam}
          passengers={passengersParam}
        />
      )}

      {/* Tampilkan Form Detail Booking jika state = BOOKING_DETAILS */}
      {pageState === 'BOOKING_DETAILS' && selectedTicket && passengersParam && (
        <BookingDetailsForm
          userName="Ruby Sigma" // Ganti dengan data user asli
          passengerCount={parseInt(passengersParam, 10) || 1} // Konversi ke angka
          ticketDetails={{ // Map data tiket yang ditemukan
            id: selectedTicket.id,
            name: selectedTicket.name,
            dateFormatted: selectedTicket.departureDateFormatted, // Gunakan tanggal terformat
            departureTime: selectedTicket.departureTime,
            arrivalTime: selectedTicket.arrivalTime,
            origin: selectedTicket.origin,
            destination: selectedTicket.destination,
            crossingTime: selectedTicket.crossingTime,
          }}
        />
      )}

      {/* Bagian "You may need this" HANYA ditampilkan jika BUKAN state hasil pencarian */}
      {pageState !== 'SHOW_RESULTS' && pageState != 'BOOKING_DETAILS' && (
        <section className="max-w-[1080px] mx-auto py-12 px-4 md:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You may need this</h2>
          <Link
            href="/how-to-order"
            className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 max-w-md border border-gray-200"
          >
            <FaTicketAlt className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-600 text-lg">How to Create An Order</h3>
              <p className="text-sm text-gray-600 mt-1">Look on how easy it is to order a ticket in NavyGo!</p>
            </div>
          </Link>
        </section>
      )}
    </main>
  );
};

// --- Komponen Halaman Utama ---
const OrderPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarUser />
      <Suspense fallback={<div className="flex justify-center items-center h-[calc(100vh-100px)]">Loading...</div>}> {/* Beri tinggi pada fallback */}
        <OrderContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default OrderPage;