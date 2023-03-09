import { Container } from "./style";

interface IButton {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size: "small" | "medium" | "large";
  color: "blue" | "gray";
}

const Button = ({ children, onClick, size, color }: IButton) => {
  return (
    <Container type="button" onClick={onClick} color={color} size={size}>
      {children}
    </Container>
  );
};

export { Button };
