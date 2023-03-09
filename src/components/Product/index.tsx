import { ModalSpecificProduct } from "../ModalSpecificProduct";
import { ModalBackground } from "../ModalBackground";
import { IProductProps } from "../../interfaces";
import React, { useState } from "react";
import { Container } from "./style";
import { Button } from "../Button";

const Product = ({ product, handleListCartProducts }: IProductProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <React.Fragment>
      {openModal ? (
        <ModalBackground>
          <ModalSpecificProduct
            product={product}
            handleListCartProducts={handleListCartProducts}
            setOpenModal={setOpenModal}
          />
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
            onClick={() => handleListCartProducts(product)}
          >
            Comprar
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

export { Product };
