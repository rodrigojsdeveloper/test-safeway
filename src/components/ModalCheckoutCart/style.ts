import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 650px;

  border-radius: 4px;
  background-color: var(--white);

  padding: 20px;

  & > menu {
    height: 500px;
    overflow-y: auto;
  }
`;

export { Container };
