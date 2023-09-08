import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 185px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 4px;
  background-color: var(--white);
  border: 2px solid var(--grey-20);

  margin: 20px 0;

  & > figure {
    width: 100%;
    max-width: 200px;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color: var(--grey-0);

    @media(max-width: 768px) {
      height: 200px;
    }
  }

  & > div {
    width: 100%;
    max-width: 250px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 20px;

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

  & > p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    text-align: center;
    color: var(--grey-50);
    padding: 20px 20px 0 0;
  }

  @media (max-width: 768px) {
    height: unset;
    flex-direction: column;

    & > figure {
      max-width: unset;

      & > img {
        object-fit: contain;
      }
    }

    & > p {
      padding: 0 0 20px 20px;
    }
  }
`;

export { Container };
