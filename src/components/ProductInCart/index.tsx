import { useEffect, useState } from "react";
import { Container } from "./style";

interface IProductComponent {
  product: any;
  handleClickCartProduct: any;
}

const ProductInCart = ({
  product,
  handleClickCartProduct,
}: IProductComponent) => {
  const [categories, setCategories] = useState<any[]>();

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then((res) => res.json())
      .then((res) => setCategories(res))
      .catch((error) => console.log(error));
  }, []);

  const category = categories?.find((p) => p.id === product.categoria_id);

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

        <p onClick={() => handleClickCartProduct(product)}>Remover</p>
      </div>
    </Container>
  );
};

export { ProductInCart };
