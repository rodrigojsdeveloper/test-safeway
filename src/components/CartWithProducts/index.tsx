import { ProductContext } from "../../context/ProductContext";
import { ModalContext } from "../../context/ModalContext";
import { ProductInCart } from "../ProductInCart";
import { Container } from "./style";
import { useContext } from "react";
import { Button } from "../Button";

const CartWithProducts = () => {
  const { handleOpenModalCheckoutCart } = useContext(ModalContext);
  const { cartProducts } = useContext(ProductContext);

  return (
    <Container>
      <menu>
        {cartProducts.map((product) => (
          <ProductInCart product={product} key={product.id} />
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
          color="gray"
          size="medium"
          onClick={handleOpenModalCheckoutCart}
        >
          Finalizar carrinho
        </Button>
      </div>
    </Container>
  );
};

export { CartWithProducts };
