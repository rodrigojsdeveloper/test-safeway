import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 465px;
  border-radius: 0px 0px 5px 5px;
  background-color: var(--grey-0);
  ::-webkit-scrollbar {
    display: none;
  }
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
  }
`;

export { Container };
