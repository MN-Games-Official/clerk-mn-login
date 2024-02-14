import Image from "next/image";
import Link from "next/link";
import componentsImg from "@/assets/components.svg";
import { DownArrow, RightArrow } from "@/icons";

export default function Main() {
  return (
    <main className="grow">
      <article className="grid lg:grid-cols-2">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient">
            Epic Adventures Await.
          </h1>
          <p className="mt-2 text-lg">
           Welcome to MN Games!
          </p>
          <div className="flex gap-2 mt-8">
            <Link
              href="/dashboard"
              className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              Sign-in/Sign-up
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
            <a
              className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
              href="#features"
            >
              Learn more
              <div className="m-auto">
                <DownArrow />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={componentsImg} alt="Clerk embeddable components" />
        </div>
      </article>

      <article
        className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24"
        id="features"
      >
        <h2 className="text-3xl font-semibold">Come Join Us!</h2>
        <p className="mt-2">
Welcome we are so glad you could join us!
          <a
            href=""
            className="font-medium text-primary-600 hover:underline"
          >
          
            
          </a>
          .
        </p>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Join Now!</h3>
            <p className="text-gray-700">
           Did you know that there are more that 500 games on MN Games?!.
            </p>
            <div className="grow"></div>
            <a
              href="/dashboard"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Join MN Games Now <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Login</h3>
            <p className="text-gray-700">
        Sign-up for an account and try it out for yourself.
            </p>
            <div className="grow"></div>
            <a
              href="/dashboard"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Sign-in To Your Account <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Go Play Games</h3>
            <p className="text-gray-700">
              We would really appreciate if you would share MN Games with friends!
            </p>
            <div className="grow"></div>
            <a
              href="/dashboard"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Play Some Games <span className="arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
