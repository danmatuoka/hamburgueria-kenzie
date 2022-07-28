import styled from "styled-components";

export const SectionCart = styled.section`
  width: 100%;
  display: flex;
  padding: 10px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    background-color: var(--grey-20);
  }

  .containerContentCart {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 60%;
    padding-left: 8px;

    .nomeContentCart {
      font-size: 1.8rem;
    }

    .descricaoContentCart {
      font-size: 1.2rem;
      color: var(--grey-50);
    }
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: var(--grey-50);
    padding-top: 4px;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
    color: var(--grey-100);
  }
`;
