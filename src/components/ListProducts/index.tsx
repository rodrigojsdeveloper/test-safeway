import { useEffect, useState } from "react";
import { Product } from "../Product";
import { Container } from "./style";

interface IListProducts {
  products: any[];
  handleAddToCart: (product: any) => void;
}

const ListProducts = ({ products, handleAddToCart }: IListProducts) => {
  return (
    <Container>
      {products.map((product) => (
        <Product
          product={product}
          handleAddToCart={handleAddToCart}
          key={product.id}
        />
      ))}
    </Container>
  );
};

export { ListProducts };
