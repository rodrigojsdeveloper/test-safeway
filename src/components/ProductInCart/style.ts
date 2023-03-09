import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;

  margin: 20px 0;

  display: flex;
  flex-direction: row;

  & > figure {
    width: 80px;
    height: 80px;

    border-radius: 5px;
    background-color: var(--grey-20);

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  & > div {
    width: 100%;
    max-width: 253px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    padding-left: 10px;

    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;

      & > h3 {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;

        padding-bottom: 10px;

        @media (max-width: 1300px) {
          width: 100%;
          max-width: 100px;
          height: 25px;

          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      & > p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;

        color: var(--grey-50);
      }
    }

    & > div:nth-child(2) {
      height: 45px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      & > p {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;

        cursor: pointer;
        color: var(--grey-10);

        &:hover {
          color: var(--grey-50);
          text-decoration: underline;
        }
      }

      & > div {
        button,
        span {
          color: var(--grey-50);
        }

        & > button {
          border: 1px solid var(--grey-20);
          padding: 0 4px;
          background: transparent;

          width: 20px;
          height: 20px;
        }

        & > button:hover {
          transition: background 300ms ease 0s;
          background: var(--grey-20);
        }

        & > span {
          width: 20px;
          height: 20px;

          padding: 0px 12px 2px 12px;

          font-size: 14px;
          font-weight: 500;

          border-top: 1px solid var(--grey-20);
          border-bottom: 1px solid var(--grey-20);
        }
      }
    }
  }
`;

export { Container };
