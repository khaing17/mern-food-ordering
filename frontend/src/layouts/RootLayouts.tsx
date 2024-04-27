import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

interface RootLayoutsProps {
  children?: React.ReactNode;
}

const RootLayouts: React.FC<RootLayoutsProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="container mx-auto flex-1 py-10">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayouts;
