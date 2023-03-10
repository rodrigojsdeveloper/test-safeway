import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;

  border-radius: 4px;
  background-color: var(--white);

  padding: 20px;

  & > div {
    width: 100%;

    padding-top: 10px;
    background-color: var(--white);

    & > figure {
      width: 100%;
      height: 250px;

      display: flex;
      flex-direction: row;
      justify-content: center;

      border-radius: 5px 5px 0 0;
      background-color: var(--grey-0);

      & > img {
        object-fit: contain;
      }
    }

    & > div {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      padding: 50px 19px 23px 20px;

      h3,
      span {
        line-height: 24px;
      }

      & > h3 {
        font-weight: 700;
        font-size: 30px;
      }

      & > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;

        color: var(--grey-50);
        padding: 30px 0 15px 0;

        &:nth-child(3) {
          padding: 20px 0;
          font-weight: 600;
        }
      }

      & > span {
        font-weight: 600;
        font-size: 14px;

        padding-bottom: 30px;
        color: var(--color-primary);
      }

      @media (max-width: 425px) {
        & > h3 {
          font-size: 20px;
        }

        & > p {
          font-size: 12px;
        }
      }
    }
  }
`;

export { Container };
