"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#00F5FF]/5 px-6 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <span className="text-base font-bold tracking-[0.15em] text-white">
          LIJO<span className="text-[#00FF88]">.</span>
        </span>
        <p className="mt-4 text-xs text-[#64748B]">
          Next.js · Three.js · React · TypeScript · Framer Motion · TailwindCSS
        </p>
        <p className="mt-2 text-[10px] text-[#64748B]/60">
          &copy; {new Date().getFullYear()} Lijo Dominic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
