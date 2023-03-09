import { ICart } from "../../interfaces";
import { ProductInCart } from "../ProductInCart";
import { Container } from "./style";

const CartWithProducts = ({
  cartProducts,
  clearAllProducts,
  handleClickCartProduct,
  handleRemoveCartProducts,
  handleListCartProducts,
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

        <button onClick={clearAllProducts}>Remover todos</button>
      </div>
    </Container>
  );
};

export { CartWithProducts };
