import { ListProducts } from "../../components/ListProducts";
import { Cart } from "../../components/Cart";
import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces";
import { api } from "../../services/api";
import { Container } from "./style";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api
      .get("posts")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddToCart = (product: IProduct) => {
    const findProduct = cartProducts.find((p) => p.id === product.id);

    if (!findProduct) {
      const newProduct = { ...product, count: 1 };

      setCartProducts([...cartProducts, newProduct]);
    } else {
      const indexProduct = cartProducts.indexOf(findProduct);

      const newCurrentSale = [...cartProducts];

      newCurrentSale[indexProduct].count++;

      setCartProducts(newCurrentSale);
    }
  };

  const handleRemoveFromCart = (product: IProduct) => {
    if (product.count > 1) {
      const indexProduct = cartProducts.indexOf(product);

      const newCurrentSale = [...cartProducts];

      newCurrentSale[indexProduct].count--;

      setCartProducts(newCurrentSale);
    } else {
      const newCurrentSale = cartProducts.filter((p) => p.id !== product.id);

      setCartProducts(newCurrentSale);
    }
  };

  const handleClickCartProduct = (product: IProduct) =>
    setCartProducts(cartProducts.filter((p) => p.id !== product.id));

  const handleClearCart = () => setCartProducts([]);

  return (
    <Container>
      <ListProducts
        products={products}
        handleListCartProducts={handleAddToCart}
      />
      <Cart
        cartProducts={cartProducts}
        handleClickCartProduct={handleClickCartProduct}
        handleRemoveCartProducts={handleRemoveFromCart}
        clearAllProducts={handleClearCart}
        handleListCartProducts={handleAddToCart}
      />
    </Container>
  );
};

export { Home };
