import { ListProducts } from "../../components/ListProducts";
import { Cart } from "../../components/Cart";
import { useEffect, useState } from "react";
import { Container } from "./style";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  const [cartProducts, setCartProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.error(error));
  }, []);

  const handleAddToCart = (product: any) =>
    setCartProducts([product, ...cartProducts]);

  const handleRemoveProductCart = (product: any) =>
    setCartProducts(cartProducts.filter((p) => p.id !== product.id));

  return (
    <Container>
      <ListProducts products={products} handleAddToCart={handleAddToCart} />
      <Cart
        cartProducts={cartProducts}
        handleRemoveProductCart={handleRemoveProductCart}
      />
    </Container>
  );
};

export { Home };
