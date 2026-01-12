"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full px-6 py-4 bg-primary-dark border-b border-primary-light-gray">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-yellow rounded-full flex items-center justify-center">
            <span className="text-primary-dark font-bold text-lg">FT</span>
          </div>
          <span className="text-xl font-semibold">Future Tech</span>
        </div>
        
        <nav className="hidden md:flex items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  transition-all text-lg leading-[27px]
                  ${
                    isActive
                      ? "bg-[#141414] text-white font-medium px-[24px] py-[14px] rounded-[10px] border border-[#333333]"
                      : "text-[#7E7E81] font-normal px-[20px] py-[14px]"
                  }
                `}
                style={{
                  fontFamily: isActive ? 'Inter' : 'Inter',
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        <button className="bg-primary-yellow text-primary-dark px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Join Now
        </button>
      </div>
    </header>
  );
}

