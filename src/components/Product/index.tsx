import { Container } from "./style";

interface IProductComponent {
  product: any;
  handleAddToCart: (product: any) => void;
}

const Product = ({ product, handleAddToCart }: IProductComponent) => {
  return (
    <Container>
      <figure>
        <img src={product.foto} alt={product.nome} />
      </figure>

      <div>
        <h3>{product.nome}</h3>

        <p>{product.descricao}</p>

        <span>R$ {product.preco.toFixed(2).replace(".", ",")}</span>

        <button onClick={() => handleAddToCart(product)}>Comprar</button>
      </div>
    </Container>
  );
};

export { Product };
