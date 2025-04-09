"use client";

import React from 'react';
import NavbarUser from '@/components/NavbarUser';
import NavbarGuest from '@/components/NavbarGuest';
import Footer from '@/components/Footer';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <NavbarUser />
      <NavbarGuest />

      <main className="container mx-auto py-8 max-w-[1080px]">
        {/* Promo Banner */}
        <section className="mb-8">
          <div className="rounded-2xl overflow-hidden relative" style={{ position: 'relative', width: '100%', height: '310px' }}>
            <Image
              src="https://placehold.co/1200x310" // Placeholder image
              alt="Promo Ramadhan Hingga 50%!"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Explore Cities */}
        <section className="py-8">
          <h2 className="text-2xl text-black font-bold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75M4.5 9.75c0 .592.233 1.168.64 1.574l11.311 11.31c.407.407.983.64 1.574.64H18M21.75 12l-8.954 8.955c-.44.439-1.152-.439-1.591 0L2.25 12" />
            </svg>
            Explore the beauty of cities in Indonesia
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* City Card (Replace with your city data) */}
            <div className="rounded-2xl overflow-hidden relative" style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Image
                src="https://placehold.co/400x250" // Placeholder image
                alt="Jakarta"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white p-2 text-center text-4xl font-bold">Jakarta</div>

            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Image
                src="https://placehold.co/400x250" // Placeholder image
                alt="Surabaya"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white p-2 text-center text-4xl font-bold">Surabaya</div>
            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Image
                src="https://placehold.co/400x250" // Placeholder image
                alt="Bandung"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white p-2 text-center text-4xl font-bold">Bandung</div>
            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Image
                src="https://placehold.co/400x250" // Placeholder image
                alt="Yogyakarta"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white p-2 text-center text-4xl font-bold">Yogyakarta</div>
            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Image
                src="https://placehold.co/400x250" // Placeholder image
                alt="Bali"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white p-2 text-center text-4xl font-bold">Bali</div>
            </div>
            <div className="rounded-2xl overflow-hidden relative" style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Image
                src="https://placehold.co/400x250" // Placeholder image
                alt="Papua Barat"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 text-white p-2 text-center text-4xl font-bold">Papua Barat</div>
            </div>
          </div>
        </section>

        {/* Best Deals */}
        <section className="py-8">
          <h2 className="text-2xl text-black font-bold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 011.125-1.125v-1.5A3.375 3.375 0 0016.5 3h-1.5a1.125 1.125 0 01-1.125 1.125v1.5a3.375 3.375 0 00-3.375 3.375h-1.5a1.125 1.125 0 011.125 1.125v2.625a3.375 3.375 0 00-3.375 3.375h-1.5a1.125 1.125 0 011.125 1.125v1.5A3.375 3.375 0 007.5 21h1.5a1.125 1.125 0 011.125-1.125v-1.5a3.375 3.375 0 003.375-3.375h1.5a1.125 1.125 0 01-1.125 1.125v1.5A3.375 3.375 0 0016.5 21h1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 003.375-3.375h1.5zM9 6.75h1.5m6 6h1.5m-3 1.5h1.5m-3-6h1.5m-6-3.75h1.5m9-6.75h1.5" />
            </svg>
            Best deals for a price-less travel!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Deal Card (Replace with your deal data) */}
            <div className="relative rounded-2xl overflow-hidden" style={{ position: 'relative', width: '100%', height: '195px' }}>
              <Image
                src="https://placehold.co/400x195" // Placeholder image
                alt="Cruise Deal"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute left-4 bottom-34 p-2 text-white font-bold text-2xl">Cruise 121A</div>

              <div className="absolute bottom-0 left-0 right-0 bg-gray-400 bg-opacity-80 pt-12 pb-3 px-4 text-center"></div>
              <div className="absolute left-4 bottom-6 p-2 text-white text-s">Starts from</div>
              <div className="absolute left-4 bottom-0 p-2 text-white text-xl line-through">IDR 491K </div>
              <div className="absolute left-28 bottom-0 p-2 text-red-500 font-bold text-2xl">IDR 397K </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ position: 'relative', width: '100%', height: '195px' }}>
              <Image
                src="https://placehold.co/400x195" // Placeholder image
                alt="Cargo Deal"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute left-4 bottom-34 p-2 text-white font-bold text-2xl">Cargo 655C</div>

              <div className="absolute bottom-0 left-0 right-0 bg-gray-400 bg-opacity-80 pt-12 pb-3 px-4 text-center"></div>
              <div className="absolute left-4 bottom-6 p-2 text-white text-s">Starts from</div>
              <div className="absolute left-4 bottom-0 p-2 text-white text-xl line-through">IDR 232K </div>
              <div className="absolute left-28 bottom-0 p-2 text-red-500 font-bold text-2xl">IDR 201K </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ position: 'relative', width: '100%', height: '195px' }}>
              <Image
                src="https://placehold.co/400x195" // Placeholder image
                alt="Ferry Deal"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute left-4 bottom-34 p-2 text-white font-bold text-2xl">Ferry 31B</div>

              <div className="absolute bottom-0 left-0 right-0 bg-gray-400 bg-opacity-80 pt-12 pb-3 px-4 text-center"></div>
              <div className="absolute left-4 bottom-6 p-2 text-white text-s">Starts from</div>
              <div className="absolute left-4 bottom-0 p-2 text-white text-xl line-through">IDR 217K</div>
              <div className="absolute left-28 bottom-0 p-2 text-red-500 font-bold text-2xl">IDR 163K </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-8">
          <h2 className="text-2xl text-black font-bold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 18 3.75zm-18 3.75h18" />
            </svg>
            Serving the best experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative rounded-2xl overflow-hidden" style={{ position: 'relative', width: '100%', height: '350px' }}>
              <Image
                src="https://placehold.co/200x350"
                alt="Toba Lake"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-400 bg-opacity-80 pt-30 pb-3 px-4 text-center"></div>
              <div className="absolute bottom-20 left-0 right-0 text-center text-black text-3xl font-bold">Toba Lake</div>
              <div className="absolute bottom-10 left-0 right-0 text-center text-black text-2xl font-bold">4.99/5</div>
              <div className="absolute bottom-0 left-0 right-0 text-center p-2 text-gray-500 text-xl font-bold">(24.2K Review)</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ position: 'relative', width: '100%', height: '350px' }}>
              <Image
                src="https://placehold.co/200x350"
                alt="Bunaken"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-400 bg-opacity-80 pt-30 pb-3 px-4 text-center"></div>
              <div className="absolute bottom-20 left-0 right-0 text-center text-black text-3xl font-bold">Bunaken</div>
              <div className="absolute bottom-10 left-0 right-0 text-center text-black text-2xl font-bold">4.97/5</div>
              <div className="absolute bottom-0 left-0 right-0 text-center p-2 text-gray-500 text-xl font-bold">(37.8K Review)</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ position: 'relative', width: '100%', height: '350px' }}>
              <Image
                src="https://placehold.co/200x350"
                alt="Wakatobi"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-400 bg-opacity-80 pt-30 pb-3 px-4 text-center"></div>
              <div className="absolute bottom-20 left-0 right-0 text-center text-black text-3xl font-bold">Wakatobi</div>
              <div className="absolute bottom-10 left-0 right-0 text-center text-black text-2xl font-bold">4.96/5</div>
              <div className="absolute bottom-0 left-0 right-0 text-center p-2 text-gray-500 text-xl font-bold">(27.1K Review)</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ position: 'relative', width: '100%', height: '350px' }}>
              <Image
                src="https://placehold.co/200x350"
                alt="Seribu Island"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-400 bg-opacity-80 pt-30 pb-3 px-4 text-center"></div>
              <div className="absolute bottom-20 left-0 right-0 text-center text-black text-3xl font-bold">Seribu Island</div>
              <div className="absolute bottom-10 left-0 right-0 text-center text-black text-2xl font-bold">4.92/5</div>
              <div className="absolute bottom-0 left-0 right-0 text-center p-2 text-gray-500 text-xl font-bold">(56.7K Review)</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;