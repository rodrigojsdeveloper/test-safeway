import { ModalCheckoutCart } from "../../components/ModalCheckoutCart";
import { ModalBackground } from "../../components/ModalBackground";
import { ListProducts } from "../../components/ListProducts";
import { Cart } from "../../components/Cart";
import logo from "../../assets/logo.svg";
import React, { useState } from "react";
import { Container } from "./style";

const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <React.Fragment>
      {openModal ? (
        <ModalBackground>
          <ModalCheckoutCart setOpenModal={setOpenModal} />
        </ModalBackground>
      ) : null}
      <Container>
        <figure>
          <img src={logo} alt="logo" />
        </figure>

        <div>
          <ListProducts />
          <Cart setOpenModal={setOpenModal} />
        </div>
      </Container>
    </React.Fragment>
  );
};

export { Home };
