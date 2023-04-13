import React, { useState, useEffect } from "react";
import axios from "axios";

type Currency = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
};

const CryptoPrices: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Currency[]>(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false"
        );
        setCurrencies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-72 h-64 bg-gray-200 rounded-md grid md:flex items-center justify-center text-center mx-auto mt-16">
      <ul className="text-white text-lg">
        {currencies.map((currency) => (
          <li key={currency.id} className="flex items-center justify-center p-2">
            <img src={currency.image} alt={currency.name} className="w-8 h-8 mr-2" />
            <span className="mr-2">{currency.symbol.toUpperCase()}</span>
            <span>{currency.current_price.toFixed(2)} USD</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoPrices;
