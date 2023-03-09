import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 346px;

  border-radius: 5px;
  background-color: var(--white);
  border: 2px solid var(--grey-20);

  margin: 6px 20px 6px 0;

  & > figure {
    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    border-radius: 5px 5px 0 0;
    background-color: var(--grey-0);
  }

  & > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 16px 19px 23px 20px;

    h3,
    span {
      line-height: 24px;
    }

    & > h3 {
      font-weight: 700;
      font-size: 18px;
    }

    & > p {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      color: var(--grey-50);
      padding-top: 14px;
    }

    & > span {
      font-weight: 600;
      font-size: 14px;

      color: var(--color-primary);
      padding: 14px 0;
    }

    & > button {
      width: 100%;
      max-width: 106px;
      height: 40px;

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

      background-color: var(--color-primary);
      border-color: var(--color-primary);
      color: var(--white);

      :hover {
        background-color: var(--color-primary-50);
        border-color: var(--color-primary-50);
      }
    }
  }
`;

export { Container };
