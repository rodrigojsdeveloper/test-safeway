import { ProductContext } from "../../contexts/ProductContext";
import { CartWithProducts } from "../CartWithProducts";
import { CartEmpty } from "../CartEmpty";
import { Container } from "./style";
import { useContext } from "react";

const Cart = () => {
  const { cartProducts } = useContext(ProductContext);

  return (
    <Container>
      <div>
        <h2>Carrinho de compras</h2>
      </div>

      {cartProducts.length > 0 ? <CartWithProducts /> : <CartEmpty />}
    </Container>
  );
};

export { Cart };
