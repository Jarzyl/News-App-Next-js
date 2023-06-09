import { ReactNode } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div id="top">
        <NavBar />
        <Banner />
        {children}
        <Footer />
      </div>
    </div>
  );
}