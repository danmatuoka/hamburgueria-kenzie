import styled from "styled-components";

export const AsideCart = styled.aside`
  width: 300px;
  display: flex;
  height: fit-content;
  flex-direction: column;
  gap: 10px;
  border-radius: 4px;
  margin: 10px auto;
  background-color: var(--grey-0);
  padding-bottom: 20px;

  .headerCart {
    width: 100%;
    height: 5rem;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px 5px 0 0;

    .descricaoHeaderCart {
      color: #fff;
      font-size: 1.6rem;
      margin-left: 10px;
    }
  }

  .divisaoCart {
    width: 93%;
    padding: 2px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: var(--grey-20);
  }

  .containerTotal {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .descricaoTotal {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 24px;
      color: var(--grey-100);
    }

    .valorTotal {
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 24px;
      color: var(--grey-50);
    }
  }

  .containerTotalVazio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;

    .tituloVazio {
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 24px;
    }

    .descricaoVazio {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 24px;
    }
  }

  .btnTotal {
    width: 93%;
    align-self: center;
    background: var(--grey-20);
    border: 2px solid var(--grey-20);
    border-radius: 8px;
    padding: 10px 0 10px 0;
    cursor: pointer;
  }

  .btnTotal:hover {
    transition: 0.3s;
    background: var(--grey-50);
    border: 2px solid var(--grey-50);
    color: #fff;
  }

  @media screen and (min-width: 769px) {
    & {
      margin: 10px 100px 0 0;
    }
  }
`;
