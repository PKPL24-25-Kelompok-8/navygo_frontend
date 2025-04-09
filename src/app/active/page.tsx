"use client";

import React from 'react';
import Image from 'next/image';
import { FaShip, FaCheckCircle, FaFilePdf } from 'react-icons/fa';
import NavbarUser from '@/components/NavbarUser';
import Footer from '@/components/Footer';

const activeTickets = [
  {
    id: 1,
    bookingCode: 'FR334BAR2240325133018026',
    route: 'Merak → Bakauheni',
    travelInsurance: true,
    price: 671000,
    qrCodeTicketUrl: 'https://placehold.co/150x150', // Placeholder QR Code
    ticketPdfFilename: 'e-ticket.pdf',
    qrCodeReceiptUrl: 'https://placehold.co/150x150', // Placeholder QR Code
    receiptPdfFilename: 'receipt.pdf',
  },
  // Tambahkan tiket aktif lainnya di sini jika ada
  // { id: 2, ... },
];

const formatIDR = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('Rp', 'IDR');
};

const ActiveTicketsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-10"> {/* Background abu-abu muda */}
    < NavbarUser />

      <main className="container mx-auto py-8 px-4 max-w-4xl"> {/* Batasi lebar & beri padding */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Active E-tickets</h1>

        {/* Daftar Tiket Aktif */}
        <div className="space-y-6">
          {activeTickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Bagian Atas: Kode Booking & Harga */}
              <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <div>
                  <span className="text-sm text-gray-500">Booking Code </span>
                  <span className="font-semibold text-gray-800">{ticket.bookingCode}</span>
                </div>
                <div className="font-semibold text-gray-800">{formatIDR(ticket.price)}</div>
              </div>

              {/* Bagian Tengah: Rute & Asuransi */}
              <div className="bg-gray-100 p-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <FaShip className="w-4 h-4 text-gray-500" />
                    <span>{ticket.route}</span>
                  </div>
                  {ticket.travelInsurance && (
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      {/* Ganti ikon jika perlu */}
                      <FaCheckCircle className="w-4 h-4 text-green-500" />
                      <span>Travel Insurance</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bagian Bawah: QR Codes & Downloads */}
              <div className="p-4 flex flex-wrap gap-6"> {/* flex-wrap untuk layar kecil */}
                 {/* E-Ticket QR & Download */}
                 <div className="flex flex-col items-center">
                    <div className="w-[150px] h-[150px] mb-2"> {/* Ukuran eksplisit untuk QR */}
                     <Image
                        src={ticket.qrCodeTicketUrl}
                        alt="E-ticket QR Code"
                        width={150}
                        height={150}
                        style={{ objectFit: 'contain' }} // Gunakan contain agar QR tidak terpotong
                      />
                    </div>
                    <a
                      href="#" // Ganti dengan link download PDF e-ticket
                      download={ticket.ticketPdfFilename}
                      className="flex items-center justify-center space-x-1 bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-300 w-full max-w-[150px]" // Lebar disesuaikan
                    >
                      <FaFilePdf className="w-3 h-3 text-red-600" /> {/* Ganti warna ikon jika perlu */}
                      <span>{ticket.ticketPdfFilename}</span>
                    </a>
                 </div>

                 {/* Receipt QR & Download */}
                  <div className="flex flex-col items-center">
                     <div className="w-[150px] h-[150px] mb-2"> {/* Ukuran eksplisit untuk QR */}
                        <Image
                            src={ticket.qrCodeReceiptUrl}
                            alt="Receipt QR Code"
                            width={150}
                            height={150}
                            style={{ objectFit: 'contain' }}
                        />
                     </div>
                    <a
                      href="#" // Ganti dengan link download PDF receipt
                      download={ticket.receiptPdfFilename}
                      className="flex items-center justify-center space-x-1 bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-300 w-full max-w-[150px]"
                    >
                      <FaFilePdf className="w-3 h-3 text-red-600" />
                      <span>{ticket.receiptPdfFilename}</span>
                    </a>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ActiveTicketsPage;