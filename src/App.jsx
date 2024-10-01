import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

const products = [
  //Sporting goods
  { id: 1, name: "Badminton", price: 49.9, type: 1, stock: 100 },
  { id: 2, name: "Billiard", price: 99.9, type: 1, stock: 0 },
  { id: 3, name: "Basketball", price: 99.9, type: 1, stock: 0 },

  //Electronics
  { id: 4, name: "Ipad Touch", price: 49.9, type: 2, stock: 50 },
  { id: 5, name: "Iphone 5", price: 99.9, type: 2, stock: 0 },
  { id: 6, name: "Nexus 7", price: 99.9, type: 2, stock: 72 },
];

const headers = ["Sporting goods", "Electronics"];

function App() {
  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) &&
      (!stockChecked || product.stock > 0)
  );

  return (
    <FilterProductTable>
      <SearchBar
        query={query}
        setQuery={setQuery}
        stockChecked={stockChecked}
        setStockChecked={setStockChecked}
      />

      <ProductTable headers={headers} products={filteredProducts} />
    </FilterProductTable>
  );
}

export default App;
