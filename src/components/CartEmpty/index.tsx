import { Container } from "./style";

const CartEmpty = () => {
  return (
    <Container>
      <b>Sua sacola está vazia</b>
      <p>Adicione itens</p>
    </Container>
  );
};

export { CartEmpty };
