import React from 'react';
import Head from "next/head";
import WeatherCard from "@/components/Weather/WeatherCard";
import CryptoCard from "@/components/Crypto/CryptoCard";
import NavBar from "@/components/Navbars/NavBar";
import NewsSection from '@/components/News/NewsSection'

type Props = {}

export default function MainPage({}: Props) {
  return (
    <>
        <Head>
          <title>News App</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" type="image/jpg" href="news.png"/>
        </Head>
        <main className="px-6 grid gap-3 md:flex">
        <NavBar/>
        <WeatherCard/>
        <NewsSection/>
        <CryptoCard/>
      </main>
    </>
  );
};