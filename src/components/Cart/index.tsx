import { CartWithProducts } from "../CartWithProducts";
import { CartEmpty } from "../CartEmpty";
import { Container } from "./style";
import { ICart } from "../../interfaces";

const Cart = ({
  cartProducts,
  handleClickCartProduct,
  handleRemoveCartProducts,
  handleListCartProducts,
  setOpenModal,
}: ICart) => {
  return (
    <Container>
      <div>
        <h2>Carrinho de compras</h2>
      </div>

      {cartProducts.length > 0 ? (
        <CartWithProducts
          cartProducts={cartProducts}
          handleClickCartProduct={handleClickCartProduct}
          handleRemoveCartProducts={handleRemoveCartProducts}
          handleListCartProducts={handleListCartProducts}
          setOpenModal={setOpenModal}
        />
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};

export { Cart };
