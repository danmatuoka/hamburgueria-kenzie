import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  overflow-y: scroll;
  gap: 15px;
  margin: 15px 0 0 13px;

  @media screen and (min-width: 900px) {
    & {
      width: 75%;
      flex-wrap: wrap;
      overflow-y: unset;
      gap: 20px;
      padding-left: 85px;
    }
  }
`;
