import React, { useEffect, useState } from "react";
import { useRouteLoaderData, useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async (id) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          return console.log("network failed");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleProduct(params.product_id);
  }, []);
  if (!product) {
    return <div>Product does not exist yet</div>;
  }
  return (
    <div className="border p-4 flex gap-4">
      <div>
        <img src={product.image} className="w-24 h-28" />
      </div>
      <div className="text-left">
        <h3 className="font-bold text-xl block mb-4">{product.titke}</h3>
        <div className="block mb-8">
          <span className="mt-4 border rounded-lg p-1 bg-green-900 text-white">
            {product.category}
          </span>
        </div>
        <span className="text-2x1">${product.price}</span>
      </div>
    </div>
  );
};

export default Product;
