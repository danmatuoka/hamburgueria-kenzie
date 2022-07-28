import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./Header";
import ProductList from "./ProductsList";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [input, setInput] = useState("");
  //const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setFilteredProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (productId) => {
    const filterProd = currentSale.filter((elem) => elem.id === productId);
    const cardProd = products.find((elem) => elem.id === productId);

    filterProd.length === 1
      ? toast.error("Item duplicado")
      : setCurrentSale((oldCurrent) => [...oldCurrent, cardProd]);
  };

  const remove = (id) => {
    setCurrentSale(currentSale.filter((elem) => elem.id !== id));
    toast.success("Item removido");
  };

  /* const showProducts = (pesquisa) => {
    filteredProducts.lenght !== 0
      ? setFilteredProducts(
          products.filter(
            (elem) =>
              elem.name.toLowerCase().includes(pesquisa.toLowerCase()) ||
              elem.category.toLowerCase().includes(pesquisa.toLowerCase())
          )
        )
      : setFilteredProducts([]);
  }; */

  useEffect(() => {
    setFilteredProducts(
      products.filter((elem) => {
        return (
          elem.name.toLowerCase().includes(input.toLowerCase()) ||
          elem.category.toLowerCase().includes(input.toLowerCase())
        );
      })
    );
  }, [input]);

  return (
    <div className="App">
      <Toaster
        position="top-center"
        toastOptions={{ style: { fontFamily: "Inter", fontSize: 28 } }}
      />
      <GlobalStyle />

      <Header input={input.value} setInput={setInput} />

      {input !== "" && (
        <p className="textSearch">
          Resultados para: <span className="textSearchProduct">{input}</span>
        </p>
      )}
      <div className="containerGeneral">
        <ProductList products={filteredProducts} handleClick={handleClick} />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          remove={remove}
        />
      </div>
    </div>
  );
}

export default App;
