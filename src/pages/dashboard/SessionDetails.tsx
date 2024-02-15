import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserDetails from "./UserDetails";
import SessionDetails from "./SessionDetails";
import OrgDetails from "./OrgDetails";

export default function DashboardPage() {
  const { user } = useUser();

  // ** Removed button creation and appending code **

  return (
    <>
      <style jsx>{`
        /* Updated CSS */
        .button-centered {
          /* justify-self: center;  -- Keep this if using flexbox */
          align-self: center;
          z-index: 9999;
        }

        .grid-container {
          display: grid;
          /* ... other grid properties */
          justify-content: center; /* Center horizontally */
          align-items: center; /* Center vertically */
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
              {/* Button created within JSX */}
              <button className="button-centered">Open blank page with iframe</button>
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
