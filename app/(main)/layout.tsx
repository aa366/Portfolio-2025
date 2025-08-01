
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackGround from "@/components/background";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  
  return (
      <>
      <BackGround />
      
        <Navbar />
        <div className="">
          {children}
        </div>
        <Footer />
        
     </>
  );
}