import React from "react";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="main-content">
          <SessionProvider>
            {children} {/* Render the content of the current route */}
          </SessionProvider>
        </div>
        <Toaster position="top-center" reverseOrder={true} />{" "}
        {/*handles pop ups */}
      </body>
    </html>
  );
};

export default Layout;
