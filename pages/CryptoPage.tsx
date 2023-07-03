import { useEffect, useState } from "react";
import axios from "axios";
import CoinItem from "@/components/Crypto/CryptoItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout/Layout";
import CustomHead from "@/components/Layout/CustomHead";
import { Crypto } from "@/Types/Crypto";

const CryptoPage: React.FC = () => {
  const [coins, setCoins] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
        );
        setCoins(response.data);
      } catch (error) {
        console.error("An error occurred while downloading data", error);
        toast.error(
          <div className="flex justify-center">
            <span className="text-red-500">
              An error occurred while downloading data
            </span>
          </div>,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    };
    fetchCryptoData();
  }, []);

  return (
    <>
      <CustomHead title="News App | Crypto" icon="coin.png" />
      <Layout>
        <div className="mx-auto mt-16 md:mt-20 text-black">
          <h1 className="text-lg md:text-3xl mb-30 text-center text-gray-500">
            Follow cryptocurrency quotes - the latest market data!
          </h1>
          <h2 className="text-lg md:text-3xl mt-6 mb-6 lg:mb-12 text-center">
            Top 15 Cryptocurrencies by Market Cap
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center md:ml-24 md:mr-24 lg:ml-36 lg:mr-36 mb-10 lg:mb-16">
            {coins.length === 0 ? (
              <p className="text-black text-3xl">
                Loading data...
              </p>
            ) : (
              coins.map((data) => <CoinItem key={data.name} data={data} />)
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CryptoPage;