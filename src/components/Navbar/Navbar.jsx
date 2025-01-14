import React from 'react';
import Logo from '../../assets/1RB.png';
import { motion } from 'framer-motion';

const NavLinks = [
  {
    id: 1,
    title: 'About',
    link: '#',
  },
  {
    id: 2,
    title: 'Services',
    link: '#',
  },
  {
    id: 3,
    title: 'Blog',
    link: '#',
  },
  {
    id: 4,
    title: 'Contact',
    link: '#',
  },
];
const Navbar = () => {
  return (
    <>
      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="container py-6 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-20" />
          <p className="font-bold text-2xl ">
            <span className=" text-[#852FE7]">Rils</span>Web
          </p>
        </div>
        {/* Link section */}
        <div className="hidden md:block !space-x-12">
          {NavLinks.map((link) => {
            return (
              <a href={link.link} className="inline-block mx-4 text-lg font-semibold">
                {link.title}
              </a>
            );
          })}
        </div>
        {/* Button section */}
      </motion.div>
    </>
  );
};

export default Navbar;
