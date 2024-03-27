export interface GetCoinResponse {
  symbol: string;
  name: string;
  market_data: {
    current_price: {
      usd: number;
    };
  };
  image: { thumb: string };
}
