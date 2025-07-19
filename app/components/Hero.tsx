import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around gap-12 px-6 py-16 bg-white">
      <div className="max-w-xl space-y-5">
        <Badge
          variant="default"
          className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-[#5A04FA] to-[#FF126D] text-white shadow-md"
        >
          The CRUD Alternative
        </Badge>

        <h2 className="text-3xl md:text-4xl font-bold text-[#262626] leading-tight">
          See why developers choose{" "}
          <span className="text-[#5A04FA]">CRUD Pro</span> over outdated
          dashboards.
        </h2>

        <p className="text-[#444] text-base md:text-lg leading-relaxed">
          CRUD Pro&apos;s speed, flexibility, and clean UI make it the #1
          alternative to clunky admin dashboards — perfect for teams who want to
          build faster, not harder.
        </p>

        <Button className="mt-4 bg-gradient-to-r from-[#5A04FA] to-[#FF126D] text-white hover:opacity-90 px-6 py-2 text-base rounded-xl shadow-md">
          Get Started
        </Button>
      </div>

      {/* დიდი ზომის სურათი */}
      <div className="w-full md:w-[600px] lg:w-[500px]">
        <Image
          src="/image.svg"
          alt="CRUD Pro dashboard illustration"
          width={900}
          height={900}
          className="w-full h-auto drop-shadow-xl"
          priority
        />
      </div>
    </section>
  );
}
