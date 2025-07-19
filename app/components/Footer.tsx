import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600">
        {/* Left side - Branding */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-[#5A04FA]">CRUD Pro</span>
          <span className="text-gray-400">© {new Date().getFullYear()}</span>
        </div>

        {/* Center - Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-[#5A04FA] transition">
            Home
          </Link>
          <Link href="/pricing" className="hover:text-[#5A04FA] transition">
            Pricing
          </Link>
          <Link href="/docs" className="hover:text-[#5A04FA] transition">
            Docs
          </Link>
          <Link href="/contact" className="hover:text-[#5A04FA] transition">
            Contact
          </Link>
        </div>

        {/* Right side - Socials or Policy */}
        <div className="flex gap-4">
          <Link href="/terms" className="hover:text-[#5A04FA] transition">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-[#5A04FA] transition">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
