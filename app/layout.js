import "./globals.css";

export const metadata = {
  title: "Admin Dashboard",
  description: "A simple admin dashboard built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
