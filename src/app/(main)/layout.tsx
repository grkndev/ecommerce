import Navbar from "@/components/Navbar/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        {children}
      </main>
    </>
  );
}
