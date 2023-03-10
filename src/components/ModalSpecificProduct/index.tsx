import { ICategory, IModalSpecificProduct } from "../../interfaces";
import { CategoryContext } from "../../context/CategoryContext";
import { ProductContext } from "../../context/ProductContext";
import { HeaderModal } from "../HeaderModal";
import { Container } from "./style";
import { Button } from "../Button";
import { useContext } from "react";

const ModalSpecificProduct = ({
  product,
  setOpenModalSpecificProduct,
}: IModalSpecificProduct) => {
  const { categories } = useContext(CategoryContext);
  const { handleAddToCart } = useContext(ProductContext);

  const category = categories?.find(
    (p: ICategory) => p.id === product.categoria_id
  );

  return (
    <Container>
      <HeaderModal
        title="Produto"
        setOpenModal={() => setOpenModalSpecificProduct(false)}
      />

      <div>
        <figure>
          <img src={product.foto} alt={product.nome} />
        </figure>

        <div>
          <h3>{product.nome}</h3>

          <p>{product.descricao}</p>

          <p>{category?.nome}</p>

          <span>R$ {product.preco.toFixed(2).replace(".", ",")}</span>

          <Button
            color="blue"
            size="small"
            onClick={() => handleAddToCart(product)}
          >
            Comprar
          </Button>
        </div>
      </div>
    </Container>
  );
};

export { ModalSpecificProduct };
