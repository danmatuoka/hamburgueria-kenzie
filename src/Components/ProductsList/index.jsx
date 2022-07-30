import Products from "../Products";
import { ContainerCard } from "./styles";

const ProductList = ({ products, handleClick }) => {
  return (
    <ContainerCard>
      {products.map((elem) => {
        return (
          <Products key={elem.id} products={elem} handleClick={handleClick} />
        );
      })}
    </ContainerCard>
  );
};

export default ProductList;
