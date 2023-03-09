import { IModalCheckoutCart } from "../../interfaces";
import { StaticProduct } from "../StaticProduct";
import { HeaderModal } from "../HeaderModal";
import { Container } from "./style";
import { Button } from "../Button";

const ModalCheckoutCart = ({
  setOpenModal,
  clearAllProducts,
  cartProducts,
}: IModalCheckoutCart) => {
  return (
    <Container>
      <HeaderModal title="Finalizar Carrinho" setOpenModal={setOpenModal} />

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
        Comprar
      </Button>
    </Container>
  );
};

export { ModalCheckoutCart };
