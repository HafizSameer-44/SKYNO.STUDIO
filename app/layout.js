import "./globals.css";

export const metadata = {
  title: "Skyno Studio — AI-Powered Advertising Studio",
  description: "AI, VFX and visual systems for next-generation advertising.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}