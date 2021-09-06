import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, onStockSell }) {
  const stockCollection = stocks.map(stock => <Stock key={stock.id} stock={stock} stockTransaction={onStockSell}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stockCollection
      }
    </div>
  );
}

export default PortfolioContainer;
