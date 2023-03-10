import { CategoryContext } from "../../context/CategoryContext";
import { ICategory, IProductComponent } from "../../interfaces";
import { Container } from "./style";
import { useContext } from "react";

const StaticProduct = ({ product }: IProductComponent) => {
  const { categories } = useContext(CategoryContext);

  const category = categories?.find(
    (p: ICategory) => p.id === product.categoria_id
  );

  return (
    <Container>
      <figure>
        <img src={product.foto} alt={product.nome} />
      </figure>

      <div>
        <h3>{product.nome}</h3>

        <p>{product.descricao}</p>

        <p>{category?.nome}</p>

        <span>R$ {product.preco.toFixed(2).replace(".", ",")}</span>
      </div>

      <p>Quantidade: {product.count}</p>
    </Container>
  );
};

export { StaticProduct };
