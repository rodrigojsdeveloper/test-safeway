import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 650px;

  border-radius: 4px;
  background-color: var(--white);

  padding: 20px;

  & > div {
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
  }

  & > menu {
    height: 500px;
    overflow-y: auto;
  }
`;

export { Container };
