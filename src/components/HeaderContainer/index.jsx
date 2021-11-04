import { useState } from "react";

function HeaderContainer({
  ShowProducts,
  userInput,
  setUserInput,
  setResultSearch,
}) {
  return (
    <header className="header-container">
      <h1>
        Burguer <p>Kenzie</p>
      </h1>
      <div className="container-search">
        <input
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          type="search"
          placeholder="Digitar Pesquisa"
        />
        <button
          onClick={() => {
            ShowProducts(userInput);
            setResultSearch(userInput);
          }}
        >
          Pesquisar
        </button>
      </div>
    </header>
  );
}

export default HeaderContainer;
