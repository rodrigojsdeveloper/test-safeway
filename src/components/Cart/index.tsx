import { CartEmpty } from "../CartEmpty";
import { CartWithProducts } from "../CartWithProducts";
import { Container } from "./style";

interface ICart {
  cartProducts: any[];
}

const Cart = ({ cartProducts }: ICart) => {
  return (
    <Container>
      <div>
        <h2>Carrinho de compras</h2>
      </div>

      {cartProducts.length > 0 ? (
        <CartWithProducts cartProducts={cartProducts} />
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};

export { Cart };
