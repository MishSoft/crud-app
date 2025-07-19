import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" flex  items-center justify-around w-full py-2 px-2 bg-white ">
      <div className="flex items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-4 px-4 py-2 rounded-2xl border border-[#bbbbbb] shadow-md hover:shadow-lg transition duration-200 bg-white"
        >
          <div className="flex space-x-1 text-[26px] font-semibold">
            <span className="uppercase bg-gradient-to-r from-[#FF126D] to-[#5A04FA] bg-clip-text text-transparent transform -scale-x-100">
              C
            </span>
            <span className="uppercase bg-gradient-to-r from-[#FF126D] to-[#5A04FA] bg-clip-text text-transparent">
              D
            </span>
          </div>

          <div className="w-[1px] h-6 bg-[#262626]" />

          <span className="uppercase text-[22px] font-semibold text-[#262626] tracking-wide">
            crud
          </span>
        </Link>
      </div>
      {/* Auth Buttons */}
      <div className="flex gap-2 p-2 border border-[#bbbbbb] rounded-xl bg-background shadow-sm">
        <Link href="/login">
          <Button variant="outline" className="px-6">
            Log In
          </Button>
        </Link>
        <Link href="/signup">
          <Button className="px-6 bg-gradient-to-r from-[#5A04FA] to-[#FF126D] text-white hover:opacity-90">
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  );
}
