import { ModalSpecificProduct } from "../ModalSpecificProduct";
import { ProductContext } from "../../context/ProductContext";
import { IProductComponent } from "../../interfaces";
import { ModalBackground } from "../ModalBackground";
import React, { useContext, useState } from "react";
import { Container } from "./style";
import { Button } from "../Button";

const Product = ({ product }: IProductComponent) => {
  const [openModalSpecificProduct, setOpenModalSpecificProduct] =
    useState<boolean>(false);
  const { handleAddToCart } = useContext(ProductContext);

  return (
    <React.Fragment>
      {openModalSpecificProduct ? (
        <ModalBackground>
          <ModalSpecificProduct
            product={product}
            setOpenModalSpecificProduct={setOpenModalSpecificProduct}
          />
        </ModalBackground>
      ) : null}
      <Container>
        <figure onClick={() => setOpenModalSpecificProduct(true)}>
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
