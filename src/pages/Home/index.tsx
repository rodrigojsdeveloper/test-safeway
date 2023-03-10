import { ModalCheckoutCart } from "../../components/ModalCheckoutCart";
import { ModalBackground } from "../../components/ModalBackground";
import { ListProducts } from "../../components/ListProducts";
import { ModalContext } from "../../context/ModalContext";
import { Cart } from "../../components/Cart";
import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { Container } from "./style";

const Home = () => {
  const { openModalCheckoutCart } = useContext(ModalContext);

  return (
    <React.Fragment>
      {openModalCheckoutCart ? (
        <ModalBackground>
          <ModalCheckoutCart />
        </ModalBackground>
      ) : null}
      <Container>
        <figure>
          <img src={logo} alt="logo" />
        </figure>

        <div>
          <ListProducts />
          <Cart />
        </div>
      </Container>
    </React.Fragment>
  );
};

export { Home };
