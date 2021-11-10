import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4444/products").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Products Category Page</h2>
      {data.map((item, index) => {
        return <div key={index}>{item.category}</div>;
      })}
    </>
  );
};

export default Products;