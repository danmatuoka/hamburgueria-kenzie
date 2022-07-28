import CardProduct from "../CartProduct";
import { AsideCart } from "./styles";

const Cart = ({ currentSale, setCurrentSale, remove }) => {
  const soma = currentSale.map((elem) => elem.price);

  return (
    <AsideCart>
      <div className="headerCart">
        <p className="descricaoHeaderCart">Carrinho de compras</p>
      </div>
      {currentSale.map(({ name, img, category, id }) => {
        return (
          <CardProduct
            key={id}
            name={name}
            img={img}
            category={category}
            id={id}
            remove={remove}
          />
        );
      })}

      {currentSale.length === 0 ? (
        <>
          <div className="containerTotalVazio">
            <p className="tituloVazio">Sua sacola está vazia</p>
            <p className="descricaoVazio">Adicione itens</p>
          </div>
        </>
      ) : (
        <>
          <div className="divisaoCart"></div>

          <div className="containerTotal">
            <p className="descricaoTotal">Total</p>
            <p className="valorTotal">
              {soma
                .reduce((a, b) => a + b)
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault;
              setCurrentSale([]);
            }}
            className="btnTotal"
          >
            Remover todos
          </button>
        </>
      )}
    </AsideCart>
  );
};

export default Cart;
