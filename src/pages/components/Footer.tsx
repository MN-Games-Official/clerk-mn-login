import { Discord, Docs, Github, Twitter } from "@/icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center h-20 gap-1 px-8 font-medium border-t md:px-20">
      <Image
        src=""
        alt="MN Games"
        width={64}
        height={32}
        priority
      />
      <span className="text-sm">MN Games™️ 2024</span>
      <nav className="flex justify-end grow sm:gap-2">
        <a
          className="flex gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition duration-100 rounded-md hover:text-gray-800"
          href=""
        </a>
      </nav>
    </footer>
  );
}
