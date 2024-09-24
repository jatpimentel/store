import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

const products = [
  //Sporting goods
  { id: 1, name: "Badminton", price: 49.9, type: 1 },
  { id: 2, name: "Billiard", price: 99.9, type: 1 },
  { id: 3, name: "Basketball", price: 99.9, type: 1 },

  //Electronics
  { id: 4, name: "Ipad Touch", price: 49.9, type: 2 },
  { id: 5, name: "Iphone 5", price: 99.9, type: 2 },
  { id: 6, name: "Nexus 7", price: 99.9, type: 2 },
];

const headers = ["Sporting goods", "Electronics"];

function App() {
  return (
    <FilterProductTable>
      <SearchBar />

      <ProductTable headers={headers} products={products} />
    </FilterProductTable>
  );
}

export default App;
