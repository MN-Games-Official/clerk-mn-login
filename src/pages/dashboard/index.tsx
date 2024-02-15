import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserDetails from "./UserDetails";
import SessionDetails from "./SessionDetails";
import OrgDetails from "./OrgDetails";

export default function DashboardPage() {
  const { user } = useUser();

  // Check if window is defined (browser environment)
  if (typeof window !== 'undefined') {
    // Create a button element
    let button = document.createElement("button");
    button.textContent = "Open blank page with iframe";
    button.classList.add("button-top");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
      // Create a new window with about:blank as the URL
      let win = window.open("about:blank", "_blank");

      // Check if win is not null
      if (win) {
        // Create an iframe element
        let iframe = document.createElement("iframe");
        iframe.src = "https://www.example.com"; // Change this to your desired URL
        iframe.style.width = "100%"; // Set the iframe width to 100% of the window
        iframe.style.height = "100%"; // Set the iframe height to 100% of the window
        iframe.style.border = "none"; // Remove the iframe border

        // Append the iframe to the new window's document body
        win.document.body.appendChild(iframe);
      }
    });

    // Append the button to the current document body
    document.body.appendChild(button);
  }

  return (
    <>
      <style jsx>{`
        /* Add this CSS to your Next.js page */
        .button-top {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999; /* Ensure the button is above other elements */
        }
      `}</style>
      <Header />
      <div className="px-8 py-12 sm:py-16 md:px-20">
        {user && (
          <>
            <h1 className="text-3xl font-semibold text-black">
              👋 Hi, {user.firstName || `Stranger`}
            </h1>
            <div className="grid gap-4 mt-8 lg:grid-cols-3">
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
      <Footer />
    </>
  );
}
