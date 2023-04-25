import React from "react";
import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filter, sort }) => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : `http://localhost:5000/api/products`
        );
        setProduct(res.data.data)
        console.log("This is from products compoment",res.data.data)
      } catch (err) {
        console.log("Got an error", err);
      }
    };
    getProduct();
  }, [category]);

  console.log(product.id);

  useEffect(() => {
    category &&
      setFilterProduct(
        product.filter((item) => {
          return Object.entries(filter).every(([key, value]) => 
            item[key].includes(value)
          );
        })
      );
  }, [category, filter, product]);

  console.log(filterProduct);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filterProduct.map((item) => <Product item={item} key={item._id} />)
        : product
            .slice(0, 10)
            .map((item) => (<Product item={item} key={item.id} />))}
    </Container>
  );
};

export default Products;
