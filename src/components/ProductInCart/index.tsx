import { ICategory, IProductComponent } from "../../interfaces";
import { CategoryContext } from "../../context/CategoryContext";
import { ProductContext } from "../../context/ProductContext";
import { Container } from "./style";
import { useContext } from "react";

const ProductInCart = ({ product }: IProductComponent) => {
  const { categories } = useContext(CategoryContext);

  const { handleClickCartProduct, handleAddToCart, handleRemoveFromCart } =
    useContext(ProductContext);

  const category = categories?.find(
    (p: ICategory) => p.id === product.categoria_id
  );

  return (
    <Container>
      <figure>
        <img src={product.foto} alt={product.nome} />
      </figure>

      <div>
        <div>
          <h3>{product.nome}</h3>
          <p>{category?.nome}</p>
        </div>

        <div>
          <p onClick={() => handleClickCartProduct(product)}>Remover</p>

          <div>
            <button
              className="botaoMais"
              onClick={() => handleAddToCart(product)}
            >
              +
            </button>
            <span>{product.count}</span>
            <button
              className="botaoMenos"
              onClick={() => handleRemoveFromCart(product)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { ProductInCart };
