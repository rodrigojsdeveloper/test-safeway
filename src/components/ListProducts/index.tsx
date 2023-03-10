import { ProductContext } from "../../contexts/ProductContext";
import { Product } from "../Product";
import { Container } from "./style";
import { useContext } from "react";

const ListProducts = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export { ListProducts };
