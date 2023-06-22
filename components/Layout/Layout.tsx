import { ReactNode } from 'react';
import NavBar from './Navbars/NavBar';
import Banner from './Banner';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    <div id='top'>
      <NavBar />
      <Banner />
      {children}
      <Footer/>
      </div>
    </>
  );
}

