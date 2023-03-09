import { IHeaderModal } from "../../interfaces";
import { Container } from "./style";
import x from "../../assets/x.svg";

const HeaderModal = ({ title, setOpenModal }: IHeaderModal) => {
  return (
    <Container>
      <h2>{title}</h2>
      <img src={x} alt="x" onClick={() => setOpenModal(false)} />
    </Container>
  );
};

export { HeaderModal };
