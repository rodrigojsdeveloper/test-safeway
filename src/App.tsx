import { ListProducts } from "./components/ListProducts";
import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";

const App = () => {
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

  return (
    <>
      <ListProducts products={products} handleAddToCart={handleAddToCart} />
      <Cart />
    </>
  );
};

export { App };
