import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

/*

Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.

*/

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [sort, setSort] = useState('all')
  const [filterBy, setFilterBy] = useState('all')

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

  function handleStockFilter(filter) {
    setFilterBy(filter)
  }

  function handleSort(by) {
    if (by === 'Alphabetically') {
      setSort('name')
    } else if (by === 'Price') {
      setSort('price')
    }
  }

  function sortStocks(a, b) {
    if (sort === 'all') return 0;
    if (a[sort] > b[sort]) return 1;
    if (a[sort] < b[sort]) return -1;
    return 0;
  }
  
  const stockFilter = stocks.filter(stock => {
    if (filterBy === 'all') {
      return true;
    }
    return stock.type === filterBy;
  }).sort(sortStocks)

  const portfolioStocks = stocks.filter(stock => stock.bought)


  return (
    <div>
      <SearchBar onStockFilter={handleStockFilter} onSort={handleSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stockFilter} onStockBuy={handleStockBuy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolioStocks} onStockSell={handleStockSell}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
