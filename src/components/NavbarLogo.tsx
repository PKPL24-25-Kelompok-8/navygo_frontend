"use client";

import Link from "next/link";
import Image from "next/image";

const NavbarLogo = () => {
  return (
    <div className="relative z-10 w-full flex justify-center items-center py-4">
      <Link href="/">
        <Image
          src="/navygo-logo.svg"
          alt="NavyGo"
          width={200}
          height={50}
          priority
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;