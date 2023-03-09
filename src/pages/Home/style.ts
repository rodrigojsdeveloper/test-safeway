import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1375.82px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  
  padding: 20px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

export { Container };
