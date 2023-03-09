import { Container } from "./style";

interface ICart {
  cartProducts: any[];
}

const CartWithProducts = ({ cartProducts }: ICart) => {
  return (
    <Container>
      <menu>
        {/*cartProducts.map((product) => (
          <ProductInCart product={product} key={product.id} />
        ))*/}
      </menu>

      <div>
        <div>
          <p>Total</p>

          <span>
            R${" "}
            {cartProducts
              .reduce(
                (valorAnterior, valorAtual) =>
                  valorAnterior + Number(valorAtual.price * valorAtual.count),
                0
              )
              .toFixed(2)
              .replace(".", ",")}
          </span>
        </div>
      </div>
    </Container>
  );
};

export { CartWithProducts };
