import { IListProducts } from "../../interfaces";
import { Product } from "../Product";
import { Container } from "./style";

const ListProducts = ({ products, handleListCartProducts }: IListProducts) => {
  return (
    <Container>
      {products.map((product) => (
        <Product
          product={product}
          handleListCartProducts={handleListCartProducts}
          key={product.id}
        />
      ))}
    </Container>
  );
};

export { ListProducts };
