import { SectionCart } from "./styles";

const CardProduct = ({ name, img, category, id, remove }) => {
  return (
    <SectionCart>
      <img src={img} alt={name} />
      <div className="containerContentCart">
        <h4 className="nomeContentCart">{name}</h4>
        <p className="descricaoContentCart">{category}</p>
      </div>
      <a
        id={id}
        onClick={(event) => {
          event.preventDefault();
          remove(id);
        }}
        href="#"
      >
        Remover
      </a>
      ;
    </SectionCart>
  );
};

export default CardProduct;
