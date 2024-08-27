import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between w-full">
        {children}
      </main>
      <Toaster />

      <div className="px-16 mt-32">
        <Footer />
      </div>
    </>
  );
}
