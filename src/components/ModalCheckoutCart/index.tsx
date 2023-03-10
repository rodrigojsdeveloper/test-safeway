import { ProductContext } from "../../contexts/ProductContext";
import { ModalContext } from "../../contexts/ModalContext";
import { StaticProduct } from "../StaticProduct";
import { HeaderModal } from "../HeaderModal";
import { Container } from "./style";
import { Button } from "../Button";
import { useContext } from "react";

const ModalCheckoutCart = () => {
  const { handleCloseModalCheckoutCart } = useContext(ModalContext);
  const { cartProducts, handleClearCart } = useContext(ProductContext);

  return (
    <Container>
      <HeaderModal
        title="Finalizar Carrinho"
        setOpenModal={handleCloseModalCheckoutCart}
      />

      <menu>
        {cartProducts.map((product) => (
          <StaticProduct product={product} key={product.id} />
        ))}
      </menu>

      <div>
        <div>
          <p>Total:</p>

          <span>
            R${" "}
            {cartProducts
              .reduce(
                (valorAnterior, valorAtual) =>
                  valorAnterior + Number(valorAtual.preco * valorAtual.count),
                0
              )
              .toFixed(2)
              .replace(".", ",")}
          </span>
        </div>

        <Button
          color="blue"
          size="large"
          onClick={() => {
            handleClearCart();
            handleCloseModalCheckoutCart();
          }}
        >
          Comprar
        </Button>
      </div>
    </Container>
  );
};

export { ModalCheckoutCart };
