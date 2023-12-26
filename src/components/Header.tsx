"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-10 flex px-10 justify-around">
      <div className="max-w-15">
        <Image
          src="assets/logos/Rentrigo-White.svg"
          alt="Rentrigo Logo"
          className="!relative"
          fill
        />
      </div>
    </div>
  );
}
