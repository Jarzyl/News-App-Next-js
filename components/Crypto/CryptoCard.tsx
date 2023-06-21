import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

type Currency = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
};

const CryptoCard: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Currency[]>(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
        );
        setCurrencies(response.data);
      } catch (error) {
        toast.error(
          <div className="flex justify-center">
            <span className="text-red-500">An error occurred while downloading data</span>
          </div>,
          {
            position: 'top-center',
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    };
    fetchData();
  }, []);

  return (
    <div>
    <h1 className="text-teal-500 text-center text-lg md:text-2xl xl:text-3xl md:mt-16 mb-6">Top 5 cryptocurrencies</h1>
    <div className="w-72 h-64 bg-white rounded-lg shadow-lg md:flex items-center justify-center text-center mx-auto mb-6">
      <ul className="text-cyan-500 text-lg">
        {currencies.map((currency) => (
          <li key={currency.id} className="flex items-center justify-center p-2">
            <img src={currency.image} alt={currency.name} className="w-8 h-8 mr-2"/>
            <span className="mr-2">{currency.symbol.toUpperCase()}</span>
            <span>{currency.current_price.toFixed(2)} USD</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default CryptoCard;
