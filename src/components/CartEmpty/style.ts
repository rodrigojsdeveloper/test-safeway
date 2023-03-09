import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 158px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;

  border-radius: 0px 0px 5px 5px;
  background-color: var(--grey-0);

  & > b {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    padding-bottom: 15px;
  }

  & > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: var(--grey-50);
  }
`;

export { Container };
