import { IModalCheckoutCart } from "../../interfaces";
import { StaticProduct } from "../StaticProduct";
import { Container } from "./style";
import x from "../../assets/x.svg";
import { Button } from "../Button";

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

      <Button
        color="blue"
        size="large"
        onClick={() => {
          clearAllProducts();
          setOpenModal(false);
        }}
      >
        Finalizar carrinho
      </Button>
    </Container>
  );
};

export { ModalCheckoutCart };
