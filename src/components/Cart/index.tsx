import { CartWithProducts } from "../CartWithProducts";
import { CartEmpty } from "../CartEmpty";
import { Container } from "./style";

interface ICart {
  cartProducts: any[];
  handleRemoveProductCart: (product: any) => void;
}

const Cart = ({ cartProducts, handleRemoveProductCart }: ICart) => {
  return (
    <Container>
      <div>
        <h2>Carrinho de compras</h2>
      </div>

      {cartProducts.length > 0 ? (
        <CartWithProducts
          cartProducts={cartProducts}
          handleRemoveProductCart={handleRemoveProductCart}
        />
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};

export { Cart };
