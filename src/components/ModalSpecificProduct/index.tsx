import { IModalSpecificProduct } from "../../interfaces";
import { HeaderModal } from "../HeaderModal";
import { Container } from "./style";
import { Button } from "../Button";

const ModalSpecificProduct = ({
  product,
  setOpenModal,
  handleListCartProducts,
}: IModalSpecificProduct) => {
  return (
    <Container>
      <HeaderModal title="Produto" setOpenModal={setOpenModal} />

      <div>
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
      </div>
    </Container>
  );
};

export { ModalSpecificProduct };
