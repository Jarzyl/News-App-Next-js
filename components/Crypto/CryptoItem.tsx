import { Crypto } from "@/Types/Crypto";

interface Props {
  data: Crypto
  };

const CryptoItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
      <div className="flex items-center mb-4">
        <h1 className="p-2 mr-2">
          <img src={data.image} alt={`${data.name} logo`} width={32} className=" hover:animate-spin"/>
        </h1>
        <h2 className="font-bold text-xl text-cyan-400 cursor-pointer">{data.name}</h2>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold mb-2">${data.current_price.toLocaleString()}</p>
        <p className={data.price_change_percentage_24h >= 0 ? "text-green-500 text-lg" : "text-red-500 text-lg"}>
          {data.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-gray-500 text-sm">
          <p className="mb-1">Rank:</p>
          <p className="mb-1">Volume (24h):</p>
          <p className="mb-1">Market Cap:</p>
        </div>
        <div className="text-right text-sm">
          <p className="mb-1">{data.market_cap_rank}</p>
          <p className="mb-1">${data.total_volume.toLocaleString()}</p>
          <p className="mb-1">${data.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoItem;