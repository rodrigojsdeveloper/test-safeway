import { useEffect, useState } from "react";
import { Product } from "../Product";
import { Container } from "./style";

const ListProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export { ListProducts };
