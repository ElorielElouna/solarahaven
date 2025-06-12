import "../styles/globals.css";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="pulse-aura">
      <Component {...pageProps} />
    </div>
  );
}