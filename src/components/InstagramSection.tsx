'use client';

import Script from "next/script";

export default function InstagramSection() {
  return (
    <div className="bg-white/90 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Follow Us on Instagram</h3>
      <div className="min-h-[450px] flex items-center justify-center">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/theislandmarket/?hl=en"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "0",
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "540px",
            minWidth: "326px",
            padding: "0",
            width: "100%"
          }}
        ></blockquote>
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-expect-error - Instagram global object
          window.instgrm?.Embeds?.process();
        }}
      />
    </div>
  );
} 