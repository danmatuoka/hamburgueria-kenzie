import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: var(--grey-0);
  gap: 1.6rem;

  img {
    width: 150px;
    height: 23px;
  }

  form {
    display: flex;
    width: 290px;
    justify-content: space-around;
    border: 2px solid var(--grey-20);
    border-radius: 8px;
    padding: 0.5rem;
    background-color: #fff;

    input {
      font-size: 1.6rem;
      width: 75%;
      border: none;
    }

    input:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }

  form:focus-within {
    border: 2px solid var(--grey-100);
  }

  button {
    border: none;
    border-radius: 4px;
    padding: 0.8rem 1.5rem 0.8rem 1.5rem;
    background: var(--color-primary);
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background: var(--color-primary-50);
  }

  @media screen and (min-width: 767px) {
    & {
      flex-direction: row;
      justify-content: space-between;
      height: 80px;
      padding: 20px 100px 20px 100px;
    }
  }
`;
