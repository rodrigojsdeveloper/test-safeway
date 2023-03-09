import { ModalCheckoutCart } from "../../components/ModalCheckoutCart";
import { ModalBackground } from "../../components/ModalBackground";
import { ListProducts } from "../../components/ListProducts";
import React, { useEffect, useState } from "react";
import { Cart } from "../../components/Cart";
import { IProduct } from "../../interfaces";
import { api } from "../../services/api";
import logo from "../../assets/logo.svg";
import { Container } from "./style";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);

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
    <React.Fragment>
      {openModal ? (
        <ModalBackground>
          <ModalCheckoutCart
            setOpenModal={setOpenModal}
            clearAllProducts={handleClearCart}
            cartProducts={cartProducts}
          />
        </ModalBackground>
      ) : null}
      <Container>
        <figure>
          <img src={logo} alt="logo" />
        </figure>

        <div>
          <ListProducts
            products={products}
            handleListCartProducts={handleAddToCart}
          />
          <Cart
            cartProducts={cartProducts}
            handleClickCartProduct={handleClickCartProduct}
            handleRemoveCartProducts={handleRemoveFromCart}
            handleListCartProducts={handleAddToCart}
            setOpenModal={setOpenModal}
          />
        </div>
      </Container>
    </React.Fragment>
  );
};

export { Home };
