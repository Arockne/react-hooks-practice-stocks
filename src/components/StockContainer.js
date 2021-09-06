import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockBuy }) {
  const stockCollection = stocks.map(stock => <Stock key={stock.id} stock={stock} stockTransaction={onStockBuy} />)
  return (
    <div>
      <h2>Stocks</h2>
      {stockCollection}
    </div>
  );
}

export default StockContainer;
