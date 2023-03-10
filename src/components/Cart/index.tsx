import { ProductContext } from "../../context/ProductContext";
import { CartWithProducts } from "../CartWithProducts";
import { CartEmpty } from "../CartEmpty";
import { ICart } from "../../interfaces";
import { Container } from "./style";
import { useContext } from "react";

const Cart = ({ setOpenModal }: ICart) => {
  const { cartProducts } = useContext(ProductContext);

  return (
    <Container>
      <div>
        <h2>Carrinho de compras</h2>
      </div>

      {cartProducts.length > 0 ? (
        <CartWithProducts setOpenModal={setOpenModal} />
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};

export { Cart };
