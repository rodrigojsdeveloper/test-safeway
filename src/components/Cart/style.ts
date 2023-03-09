import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 365px;

  & > div:nth-child(1) {
    width: 100%;
    height: 65px;

    border-radius: 5px 5px 0px 0px;
    background-color: var(--color-primary);

    padding: 22px 20px 13px 20px;

    & > h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      color: var(--white);
    }
  }

  @media (max-width: 1440px) {
    margin: 0 auto;
    padding-top: 20px;
  }
`;

export { Container };
