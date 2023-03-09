import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 960px;

  display: flex;
  flex-wrap: wrap;

  margin: 0 auto;

  ::-webkit-scrollbar {
    width: 2.5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--color-primary);
  }

  @media screen and (max-width: 1300px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: unset;
  }
`;

export { Container };
