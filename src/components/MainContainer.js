import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

/*

Allow a user to sell a stock in their Portfolio by clicking on the stock and it should be removed from their Portfolio.

Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.

Allow a user to filter stocks based on the type of the stock.
*/

function MainContainer() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(setStocks)
  }, [])

  function handleStockBuy(id) {
    setStocks(stocks.map(stock => {
      if (stock.id === id) {
        return { ...stock, bought: true }
      }
      return stock;
    }))
  }

  function handleStockSell(id) {
    setStocks(stocks.map(stock => {
      if (stock.id === id) {
        return { ...stock, bought: false }
      }
      return stock
    }))
  }

  const portfolioStocks = stocks.filter(stock => stock.bought)

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockBuy={handleStockBuy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolioStocks} onStockSell={handleStockSell}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
