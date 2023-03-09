import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 700px;

  border-radius: 4px;
  background-color: var(--white);

  padding: 20px;

  & > menu {
    height: 500px;
    overflow-y: auto;
  }

  & > div {
    width: 100%;
    height: 140px;

    padding: 0 10px 20px 10px;
    margin-top: 15px;

    & > div {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      padding: 14px 0 22px 0;

      p,
      span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
      }

      & > span {
        color: var(--grey-50);
      }
    }
  }
`;

export { Container };
