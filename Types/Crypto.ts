export interface Crypto {
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