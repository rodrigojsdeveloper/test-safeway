import { IModalCheckoutCart } from "../../interfaces";
import { Container } from "./style";
import x from "../../assets/x.svg";
import { StaticProduct } from "../StaticProduct";

const ModalCheckoutCart = ({
  setOpenModal,
  clearAllProducts,
  cartProducts,
}: IModalCheckoutCart) => {
  return (
    <Container>
      <div>
        <h2>Finalizar Carrinho</h2>
        <img src={x} alt="x" onClick={() => setOpenModal(false)} />
      </div>

      <menu>
        {cartProducts.map((product) => (
          <StaticProduct product={product} key={product.id} />
        ))}
      </menu>

      <button onClick={clearAllProducts}>Finalizar carrinho</button>
    </Container>
  );
};

export { ModalCheckoutCart };
