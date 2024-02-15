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
                  >
          <div className="m-auto">
            <Docs />
          </div>
          <span className="hidden sm:inline"></span>
          <span className="inline sm:hidden"></span>
        </a>
        <a
          className="flex gap-2 px-3 py-2 text-sm font-semibold text-gray-600 transition duration-100 rounded-md hover:text-gray-800"
          href="https://together-ghoul-7.accounts.dev/sign-up"
        >
          <div className="m-auto">
            <github />
          </div>
          <span className="hidden sm:inline"> View on Github</span>
        </a>
        <a
          className="flex flex-col justify-center p-2 hover:underline"
          href=""
        >
          <twitter />
        </a>
        <a
          className="flex flex-col justify-center p-2 hover:underline"
          href=""
          <discord />
        >
        </a>
      </nav>
    </footer>
  );
}
