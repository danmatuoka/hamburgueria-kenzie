import styled from "styled-components";

export const SectionCard = styled.section`
  display: flex;
  flex-direction: column;
  /* width: 290px; */
  justify-content: center;
  align-items: flex-start;

  border-radius: 5px;

  img {
    background-color: var(--grey-20);
    height: 140px;
    width: 250px;
    object-fit: contain;
    border-radius: 5px 5px 0 0;
  }

  .containerContentCard {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid #e0e0e0;
    gap: 20px;
    padding: 10px;
    border-radius: 0 0 5px 5px;

    .cardName {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 24px;
    }

    .cardCategory {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 16px;
    }

    .cardPrice {
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 24px;
    }

    .btnCard {
      width: 100px;
      background-color: var(--color-primary);
      border: 2px solid var(--color-primary);
      border-radius: 8px;
      color: #fff;
      padding: 8px;
      cursor: pointer;
    }

    .btnCard:hover {
      background-color: var(--color-primary-50);
      border: 2px solid var(--color-primary-50);
    }
  }
`;
