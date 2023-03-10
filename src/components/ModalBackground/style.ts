import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;

  background: var(--shadow);

  padding: 20px;
`;

export { Container };
