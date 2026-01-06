import Header from "@/components/Header";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Admin Dashboard",
  description: "A simple admin dashboard built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white">
        <div className="global-container min-h-screen w-full flex gap-4">
          <Sidebar />
          <div className="p-4 w-full">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
