import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserDetails from "./UserDetails";
import SessionDetails from "./SessionDetails";
import OrgDetails from "./OrgDetails";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <>
      <style jsx>{`
        .button-centered {
          align-self: center; /* Vertically center */
          z-index: 9999;
          margin: 10px; /* Add some spacing between buttons */
        }

        .grid-container {
          display: grid;
          grid-template-areas:
            "header header header"
            "user session org"
            "games games games";
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          justify-content: center; /* Horizontally center buttons */
        }
      `}</style>
      <Header />
      <div className="px-8 py-12 sm:py-16 md:px-20">
        {user && (
          <>
            <h1 className="text-3xl font-semibold text-black">
               Hi, {user.firstName || "Stranger"}
            </h1>
            <div className="grid-container">
              <UserDetails />
              <SessionDetails />
              <OrgDetails />

              {/* Three buttons with different iframe URLs and text, centered horizontally */}
              <button className="button-centered" onClick={() => {
                window.open("https://www.example.com", "_blank"); // Change URL and button text
              }}>
                Button 1 (Iframe 1)
              </button>
              <button className="button-centered" onClick={() => {
                window.open("https://www.example2.com", "_blank"); // Change URL and button text
              }}>
                Button 2 (Iframe 2)
              </button>
              <button className="button-centered" onClick={() => {
                window.open("https://www.example3.com", "_blank"); // Change URL and button text
              }}>
                Button 3 (Iframe 3)
              </button>
            </div>
            <h2 className="mt-16 mb-4 text-3xl font-semibold text-black">
              Games
            </h2>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
