import React from 'react';
import { FaVectorSquare } from 'react-icons/fa';
import { FaPenToSquare } from 'react-icons/fa6';
import { BiSolidDollarCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animate';

const ServiceCard = [
  {
    id: 1,
    title: 'Paket Silver',
    description: 'Gratis Hosting Shared 1 Tahun,Gratis Domain 1 Tahun,Gratis SSL Selamanya, Ratusan Pilihan Tampilan Website, Tampilan Website Responsive, Pembuatan 1 Hari Kerja,Pembuatan 1 Halaman Website,Gratis SEO Basic',
    harga: '750.000',
    icon: <FaVectorSquare />,
    link: '#',
    delay: 0.2,
  },
  {
    id: 2,
    title: 'Paket Platinum',
    description:
      'Gratis Hosting 1 Tahun, Kapasitas Hosting Unlimited,ratis Domain 1 Tahun,Gratis Email Bisnis, Gratis SSL Selamanya,Ratusan Pilihan Tampilan Website, Tampilan Website Responsive, Pembuatan 2 Hari Kerja, Pembuatan 10 Halaman Website, Gratis SEO Basic, Gratis Pemasangan Google Business,Gratis Riset Kata Kunci',
    harga: '1.500.000',
    icon: <FaPenToSquare />,
    link: '#',
    delay: 0.4,
  },
  {
    id: 3,
    title: 'Paket Diamond',
    description:
      'Gratis Hosting 1 Tahun, Kapasitas Hosting Unlimited,Gratis Domain 1 Tahun, Gratis Email Bisnis, Gratis SSL Selamanya,Ratusan Pilihan Tampilan Website, Tampilan Website Responsive, Pembuatan 15 Halaman Website, Pembuatan Halaman Checkout, Transaksi Dan Pembayaran Secara Online, Gratis Riset Kata Kunci, Integrasi Payment Gateway Rp 1.000.000,-,Integrasi Layanan Pengiriman Rp 500.000,-',
    harga: '2.250.000',
    icon: <BiSolidDollarCircle />,
    link: '#',
    delay: 0.6,
  },
];
const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1 variants={SlideUp(0.2)} initial="initial" whileInView={'animate'} className="text-3xl font-bold font-serif">
            Layanan Kami
          </motion.h1>
          <motion.p variants={SlideUp(0.4)} initial="initial" whileInView={'animate'} className="text-gray-500 text-sm">
            Kami Menyediakan beberapa layanan untuk mempermudah anda
          </motion.p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView={'animate'}
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
              >
                <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">{card.icon}</span>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-gray-400 text-xs">{card.description}</p>
                <a href={card.link} className="inline-block border-b border-black">
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
