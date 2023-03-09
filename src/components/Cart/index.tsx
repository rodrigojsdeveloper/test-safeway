import { CartWithProducts } from "../CartWithProducts";
import { CartEmpty } from "../CartEmpty";
import { Container } from "./style";
import { ICart } from "../../interfaces";

const Cart = ({
  cartProducts,
  clearAllProducts,
  handleClickCartProduct,
  handleRemoveCartProducts,
  handleListCartProducts,
}: ICart) => {
  return (
    <Container>
      <div>
        <h2>Carrinho de compras</h2>
      </div>

      {cartProducts.length > 0 ? (
        <CartWithProducts
          cartProducts={cartProducts}
          clearAllProducts={clearAllProducts}
          handleClickCartProduct={handleClickCartProduct}
          handleRemoveCartProducts={handleRemoveCartProducts}
          handleListCartProducts={handleListCartProducts}
        />
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};

export { Cart };
