import { ModalSpecificProduct } from "../ModalSpecificProduct";
import { ProductContext } from "../../context/ProductContext";
import { ModalBackground } from "../ModalBackground";
import { IProductComponent } from "../../interfaces";
import React, { useContext, useState } from "react";
import { Container } from "./style";
import { Button } from "../Button";

const Product = ({ product }: IProductComponent) => {
  const { handleAddToCart } = useContext(ProductContext);

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <React.Fragment>
      {openModal ? (
        <ModalBackground>
          <ModalSpecificProduct product={product} setOpenModal={setOpenModal} />
        </ModalBackground>
      ) : null}
      <Container>
        <figure onClick={() => setOpenModal(true)}>
          <img src={product.foto} alt={product.nome} />
        </figure>

        <div>
          <h3>{product.nome}</h3>

          <p>{product.descricao}</p>

          <span>R$ {product.preco.toFixed(2).replace(".", ",")}</span>

          <Button
            color="blue"
            size="small"
            onClick={() => handleAddToCart(product)}
          >
            Comprar
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export { Product };
