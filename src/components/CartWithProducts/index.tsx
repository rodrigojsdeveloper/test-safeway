import { ProductInCart } from "../ProductInCart";
import { ICart } from "../../interfaces";
import { Container } from "./style";
import { Button } from "../Button";

const CartWithProducts = ({
  cartProducts,
  handleClickCartProduct,
  handleRemoveCartProducts,
  handleListCartProducts,
  setOpenModal,
}: ICart) => {
  return (
    <Container>
      <menu>
        {cartProducts.map((product) => (
          <ProductInCart
            product={product}
            key={product.id}
            handleClickCartProduct={handleClickCartProduct}
            handleRemoveCartProducts={handleRemoveCartProducts}
            handleListCartProducts={handleListCartProducts}
          />
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

        <Button color="gray" size="medium" onClick={() => setOpenModal(true)}>
          Finalizar carrinho
        </Button>
      </div>
    </Container>
  );
};

export { CartWithProducts };
