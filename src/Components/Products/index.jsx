import { SectionCard } from "./styles";

const Products = ({ products, handleClick }) => {
  return (
    <SectionCard>
      <img
        src={products.img}
        referrerPolicy="no-referrer"
        alt={products.name}
      />
      <div className="containerContentCard">
        <h4 className="cardName">{products.name}</h4>
        <p className="cardCategory">{products.category}</p>
        <span className="cardPrice">
          {products.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          className="btnCard"
          id={products.id}
          onClick={() => handleClick(products.id)}
        >
          Adicionar
        </button>
      </div>
    </SectionCard>
  );
};

export default Products;
