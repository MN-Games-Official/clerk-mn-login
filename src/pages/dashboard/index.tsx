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
          position: fixed; /* Fixed positioning for outside grid */
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%); /* Center button */
          z-index: 9999;
        }

        /* ... other styles */
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
            </div>
            <h2 className="mt-16 mb-4 text-3xl font-semibold text-black">
              Games
            </h2>
          </>
        )}
      </div>
      <button className="button-centered" onClick={() => {
        window.location.assign("https://www.example.com"); // Change URL if needed
      }}>
        Open blank page with iframe
      </button>
      <Footer />
    </>
  );
}
