import { ICategory, IProductComponent } from "../../interfaces";
import { useEffect, useState } from "react";
import { Container } from "./style";

const ProductInCart = ({
  product,
  handleClickCartProduct,
  handleListCartProducts,
  handleRemoveCartProducts,
}: IProductComponent) => {
  const [categories, setCategories] = useState<ICategory[]>();

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then((res) => res.json())
      .then((res) => setCategories(res))
      .catch((error) => console.log(error));
  }, []);

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
              onClick={() => handleListCartProducts(product)}
            >
              +
            </button>
            <span>{product.count}</span>
            <button
              className="botaoMenos"
              onClick={() => handleRemoveCartProducts(product)}
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
