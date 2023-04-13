import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinItem from '@/components/CoinItem'
import Head from "next/head";
import NavBar from "@/components/NavBar";

interface Coin {
  id: string;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
  market_cap_rank: number;
}

const CoinsList: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setCoins(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
    <Head>
    <title>News App | Crypto </title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/png" href="coin.png" />

    </Head>
    <NavBar/>
    <div className="mx-auto mt-12 md:mt-20">
      <h1 className="text-lg md:text-3xl mb-3 text-center">Follow cryptocurrency quotes - the latest market data</h1>
      <h2 className="text-lg md:text-3xl mb-6 text-center">Top 10 Cryptocurrencies by Market Cap</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center md:ml-24 md:mr-24 lg:ml-36 lg:mr-36">
        {coins.map((coin) => (
          <CoinItem key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
    </>
  );
};

export default CoinsList;
