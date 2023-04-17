import React from "react";

interface Props {
  coin: {
    id: string;
    name: string;
    image: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    market_cap_rank: number;
  };
}

const CryptoItem: React.FC<Props> = ({ coin }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
      <div className="flex items-center mb-4">
        <h1 className="p-2 mr-2">
          <img src={coin.image} alt={`${coin.name} logo`} width={32} className=" hover:animate-spin"/>
        </h1>
        <h2 className="font-bold text-xl text-cyan-400 cursor-pointer">{coin.name}</h2>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold mb-2">${coin.current_price.toLocaleString()}</p>
        <p className={coin.price_change_percentage_24h >= 0 ? "text-green-500 text-lg" : "text-red-500 text-lg"}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-gray-500 text-sm">
          <p className="mb-1">Rank:</p>
          <p className="mb-1">Volume (24h):</p>
          <p className="mb-1">Market Cap:</p>
        </div>
        <div className="text-right text-sm">
          <p className="mb-1">{coin.market_cap_rank}</p>
          <p className="mb-1">${coin.total_volume.toLocaleString()}</p>
          <p className="mb-1">${coin.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoItem;