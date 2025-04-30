import React from 'react'

import Link from 'next/link';

const Logo = ({
  logoColor,
  logoName,
}: {
  logoColor?: string;
  logoName?: string;
}) => {
  return (
    <Link href="/"
      className={`font-righteous md:text-5xl font-semibold text-5xl bg-gradient-to-r from-[#497D74] to-[#2F4F4F] text-transparent bg-clip-text`}
      style={{ color: logoColor  }}
    >
      {logoName || "LOGO"}
    </Link>
  );
}

export default Logo