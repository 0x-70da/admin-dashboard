import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Admin Dashboard",
  description: "A simple admin dashboard built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white">
        <div className="global-container p-4 min-h-screen w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
