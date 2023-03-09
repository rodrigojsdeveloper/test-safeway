import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;

  padding: 80px;
  overflow-y: auto;
  background: var(--shadow8);

  @media (max-width: 768px) {
    padding: 80px 25px;
  }
`;

export { Container };
