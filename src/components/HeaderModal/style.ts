import styled from "styled-components";

const Container = styled.header`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 10px;

  & > h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: var(--gray-100);
  }

  & > img {
    cursor: pointer;
  }
`;

export { Container };
