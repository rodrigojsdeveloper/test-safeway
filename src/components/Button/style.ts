import styled, { css } from "styled-components";

interface IButtonStyled {
  size: "small" | "medium" | "large";
  color: "blue" | "gray";
}

const Container = styled.button<IButtonStyled>`
  width: 100%;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 4px;

  transition: 0.5s;

  ${({ color }) => {
    switch (color) {
      case "blue":
        return css`
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--white);

          &:hover {
            background-color: var(--color-primary-50);
            border-color: var(--color-primary-50);
          }
        `;

      case "gray":
        return css`
          background-color: var(--grey-20);
          border-color: var(--grey-20);
          color: var(--grey-50);

          &:hover {
            background-color: var(--grey-50);
            border-color: var(--grey-50);
            color: var(--white);
          }
        `;

      default:
        return false;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          max-width: 106px;
          height: 40px;
        `;

      case "medium":
        return css`
          max-width: 345px;
          height: 50px;
        `;

      case "large":
        return css`
          max-width: 350px;
          height: 40px;

          margin: 0 auto;
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
