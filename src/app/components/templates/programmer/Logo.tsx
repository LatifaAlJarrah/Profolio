import React from 'react'
import { Righteous } from 'next/font/google';

const righteous = Righteous({
    weight: "400",
    subsets: ["latin"],
})
const Logo = () => {
  return (
    <div
      className={`${righteous.className} text-5xl bg-gradient-to-r from-[#497D74] to-[#2F4F4F] text-transparent bg-clip-text`}
    >
      LOGO
    </div>
  );
}

export default Logo