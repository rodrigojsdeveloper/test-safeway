import { IProductProps } from "../../interfaces";
import { Container } from "./style";
import { Button } from "../Button";

const Product = ({ product, handleListCartProducts }: IProductProps) => {
  return (
    <Container>
      <figure>
        <img src={product.foto} alt={product.nome} />
      </figure>

      <div>
        <h3>{product.nome}</h3>

        <p>{product.descricao}</p>

        <span>R$ {product.preco.toFixed(2).replace(".", ",")}</span>

        <Button
          color="blue"
          size="small"
          onClick={() => handleListCartProducts(product)}
        >
          Comprar
        </Button>
      </div>
    </Container>
  );
};

export { Product };
