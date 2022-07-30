import { DivHeader } from "./styles";
import logo from "../../Assets/logo.svg";
import { useState } from "react";

const Header = ({ showProducts, input, setInput }) => {
  const [eventUser, setEventUser] = useState("");

  return (
    <DivHeader>
      <img src={logo} alt="logo kenzie burguer" />

      <form>
        <input
          value={eventUser}
          onChange={(e) => setEventUser(e.target.value)}
          type="text"
          placeholder="Digite sua pesquisa"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setInput(eventUser);
            setEventUser("");
          }}
        >
          Pesquisar
        </button>
      </form>
    </DivHeader>
  );
};

export default Header;
