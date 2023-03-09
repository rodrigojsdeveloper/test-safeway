import { Container } from "./style";

interface IProductComponent {
  product: any;
}

const Product = ({ product }: IProductComponent) => {
  return (
    <Container>
      <img src={product.foto} alt={product.nome} />

      <div>
        <h3>{product.nome}</h3>

        <p>{product.descricao}</p>

        <p>{product.preco}</p>

        <button>Comprar</button>
      </div>
    </Container>
  );
};

export { Product };
