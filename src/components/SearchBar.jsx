import React from "react";

const SearchBar = ({ query, setQuery, StockChecked, setStockChecked }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type Here"
        className="border-2 rounded-lg p-2"
      />
      <div>
        <input
          type="checkbox"
          checked={StockChecked}
          onChange={(e) => setStockChecked(e.target.checked)}
        />
        Only show products in stockS
      </div>
    </div>
  );
};

export default SearchBar;
