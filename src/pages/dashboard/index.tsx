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
                // Open a new tab with an about:blank page
                let win = window.open("", "_blank");
                // Create an iframe element
                let iframe = document.createElement("iframe");
                // Set the iframe's source to the desired URL
                iframe.src = "https://www.bing.com"; // Change URL
                // Set the iframe's style to cover the entire viewport
                iframe.style.position = "fixed";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.bottom = "0";
                iframe.style.right = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "none";
                iframe.style.margin = "0";
                iframe.style.padding = "0";
                iframe.style.overflow = "hidden";
                iframe.style.zIndex = "999999";
                // Append the iframe to the new tab's body
                win.document.body.appendChild(iframe);
              }}>
                Search with Bing // Change button text
              </button>
              <button className="button-centered" onClick={() => {
                // Repeat the same steps for the second button
                let win = window.open("", "_blank");
                let iframe = document.createElement("iframe");
                iframe.src = "https://www.wikipedia.org"; // Change URL
                iframe.style.position = "fixed";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.bottom = "0";
                iframe.style.right = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "none";
                iframe.style.margin = "0";
                iframe.style.padding = "0";
                iframe.style.overflow = "hidden";
                iframe.style.zIndex = "999999";
                win.document.body.appendChild(iframe);
              }}>
                Browse Wikipedia // Change button text
              </button>
              <button className="button-centered" onClick={() => {
                // Repeat the same steps for the third button
                let win = window.open("", "_blank");
                let iframe = document.createElement("iframe");
                iframe.src = "https://www.youtube.com"; // Change URL
                iframe.style.position = "fixed";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.bottom = "0";
                iframe.style.right = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "none";
                iframe.style.margin = "0";
                iframe.style.padding = "0";
                iframe.style.overflow = "hidden";
                iframe.style.zIndex = "999999";
                win.document.body.appendChild(iframe);
              }}>
                Watch YouTube // Change button text
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
