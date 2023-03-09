import { Container } from "./style";

interface IProductComponent {
  product: any;
  handleAddToCart: (product: any) => void;
}

const Product = ({ product, handleAddToCart }: IProductComponent) => {
  return (
    <Container>
      <img src={product.foto} alt={product.nome} />

      <div>
        <h3>{product.nome}</h3>

        <p>{product.descricao}</p>

        <p>{product.preco}</p>

        <button onClick={() => handleAddToCart(product)}>Comprar</button>
      </div>
    </Container>
  );
};

export { Product };
