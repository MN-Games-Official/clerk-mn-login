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
            <Link href="/sign-up">
              <button className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700">
                Sign-up
                <div className="m-auto">
                  <RightArrow />
                </div>
              </button>
            </Link>
            <Link href="/login">
              <button className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800">
                Login
                <div className="m-auto">
                  <DownArrow />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={componentsImg} alt="Clerk embeddable components" />
        </div>
      </article>

      <article className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24" id="features">
        <h2 className="text-3xl font-semibold">See What We Have To Offer!</h2>
        <p className="mt-2">Check Out Our Features!</p>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          {/* Feature cards */}
        </div>
      </article>
    </main>
  );
}
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
            <Link href="/sign-up">
              <button className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700">
                Sign-up
                <div className="m-auto">
                  <RightArrow />
                </div>
              </button>
            </Link>
            <Link href="/login">
              <button className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800">
                Login
                <div className="m-auto">
                  <DownArrow />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={componentsImg} alt="Clerk embeddable components" />
        </div>
      </article>

      <article className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24" id="features">
        <h2 className="text-3xl font-semibold">See What We Have To Offer!</h2>
        <p className="mt-2">Check Out Our Features!</p>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          {/* Feature cards */}
        </div>
      </article>
    </main>
  );
}
