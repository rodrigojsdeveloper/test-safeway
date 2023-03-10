import styled from "styled-components";

const Container = styled.div`
  width: 300px;

  border-radius: 4px;
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

    cursor: pointer;
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

      &:nth-child(3) {
        font-weight: 600;
      }
    }

    & > span {
      font-weight: 600;
      font-size: 14px;

      color: var(--color-primary);
      padding: 14px 0;
    }
  }

  @media (max-width: 1440px) {
    min-width: 300px;
  }
`;

export { Container };
