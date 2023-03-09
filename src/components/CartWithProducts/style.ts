import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 465px;

  border-radius: 0px 0px 5px 5px;
  background-color: var(--grey-0);

  & > menu {
    width: 100%;
    height: 323px;

    padding: 0 10px;
    overflow: scroll;
  }

  & > div {
    width: 100%;
    height: 140px;

    padding: 0 10px 20px 10px;
    border-top: 2px solid var(--grey-20);

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
    & > button {
      width: 100%;
      height: 50px;

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

      background-color: var(--grey-20);
      border-color: var(--grey-20);
      color: var(--grey-50);

      :hover {
        background-color: var(--grey-50);
        border-color: var(--grey-50);
        color: var(--white);
      }
    }
  }
`;

export { Container };
