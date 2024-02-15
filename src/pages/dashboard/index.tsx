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

             <button className="button-centered" onClick={() => {
  const win = window.open("about:blank", "_blank");
  if (win) { // Check if window was created successfully
    win.document.body.innerHTML = '<iframe src="https://www.example.com" style="width:100%;height:100%"></iframe>';
  } else {
    // Handle window creation failure gracefully (e.g., display an error message)
  }
}}

             <button className="button-centered" onClick={() => {
  const win = window.open("about:blank", "_blank");
  if (win) { // Check if window was created successfully
    win.document.body.innerHTML = '<iframe src="https://www.example.com" style="width:100%;height:100%"></iframe>';
  } else {
    // Handle window creation failure gracefully (e.g., display an error message)
  }
}}

              <button className="button-centered" onClick={() => {
  const win = window.open("about:blank", "_blank");
  if (win) { // Check if window was created successfully
    win.document.body.innerHTML = '<iframe src="https://www.example.com" style="width:100%;height:100%"></iframe>';
  } else {
    // Handle window creation failure gracefully (e.g., display an error message)
  }
}}


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
