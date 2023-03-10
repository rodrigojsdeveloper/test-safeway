import { IProductComponent } from "../../interfaces";
import { Container } from "./style";

const StaticProduct = ({ product }: IProductComponent) => {
  return (
    <Container>
      <figure>
        <img src={product.foto} alt={product.nome} />
      </figure>

      <div>
        <h3>{product.nome}</h3>

        <p>{product.descricao}</p>

        <span>R$ {product.preco.toFixed(2).replace(".", ",")}</span>
      </div>

      <p>Quantidade: {product.count}</p>
    </Container>
  );
};

export { StaticProduct };
