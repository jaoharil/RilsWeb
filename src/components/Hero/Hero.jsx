import React from 'react';
import HeroPng from '../../assets/g1.png';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animation/animate';

const Hero = () => {
  const waNumber = '6283192923713'; // Ganti dengan nomor WhatsApp tujuan
  const waMessage = encodeURIComponent('Halo, saya tertarik untuk membuat website di rilsweb');

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
        {/* Text section */}
        <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-10 text-center md:text-left pt-20 md:pt-0 px-10">
          <motion.h1 variants={SlideUp(0.2)} initial="initial" animate="animate" className="text-4xl font-bold font-serif">
            Ingin Bisnis <span className="text-[#852FE7]">Anda Lebih Dikenal?</span>
            Saatnya Punya Website <span className="text-[#852FE7]">Profesional!</span>
          </motion.h1>

          <motion.p variants={SlideUp(0.5)} initial="initial" animate="animate" className="text-sm md:text-base text-gray-500 leading-7">
            Jangan ragu untuk mempercayakan pembuatan website impian Anda kepada kami. Kami siap membantu Anda mengembangkan website yang memenuhi kebutuhan bisnis Anda.
          </motion.p>

          <div className="space-x-4">
            <motion.button variants={SlideUp(1.1)} initial="initial" animate="animate" className="primary-btn" onClick={() => window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank')}>
              Pesan Sekarang <span>➡️</span>
            </motion.button>
          </div>
        </div>

        {/* Images section */}
        <div className="flex flex-col items-center justify-center">
          <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} src={HeroPng} alt="Hero Section" className="w-[80%] md:w-[700px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
