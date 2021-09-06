import React from "react";

function Stock({ stock, stockTransaction }) {
  const {id, ticker, name, price} = stock
  
  function handleClickTransaction() {
      stockTransaction(id)
  }

  return (
    <div onClick={handleClickTransaction}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
