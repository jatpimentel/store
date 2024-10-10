import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");
  const [stockChecked, setStockChecked] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https:fakestoreapi.com/products");
        const data = await response.json();

        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <FilterProductTable>
      <SearchBar
        query={query}
        setQuery={setQuery}
        stockChecked={stockChecked}
        setStockChecked={setStockChecked}
      />
      {!loading ? (
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <span key={product.id}>{product.title}</span>
          ))}
        </div>
      ) : (
        <span>Loading pa hulat...</span>
      )}
    </FilterProductTable>
  );
}

export default App;
