import { ProductContext } from "../../context/ProductContext";
import { IModalCheckoutCart } from "../../interfaces";
import { StaticProduct } from "../StaticProduct";
import { HeaderModal } from "../HeaderModal";
import { Container } from "./style";
import { Button } from "../Button";
import { useContext } from "react";

const ModalCheckoutCart = ({ setOpenModal }: IModalCheckoutCart) => {
  const { cartProducts, handleClearCart } = useContext(ProductContext);

  return (
    <Container>
      <HeaderModal title="Finalizar Carrinho" setOpenModal={setOpenModal} />

      <menu>
        {cartProducts.map((product) => (
          <StaticProduct product={product} key={product.id} />
        ))}
      </menu>

      <div>
        <div>
          <p>Total</p>

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
            setOpenModal(false);
          }}
        >
          Comprar
        </Button>
      </div>
    </Container>
  );
};

export { ModalCheckoutCart };
