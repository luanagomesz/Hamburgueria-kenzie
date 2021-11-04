import "./App.css";
import { useState } from "react";
import Product from "./components/Product";
import MenuContainer from "./components/MenuContainer";
import CarrinhoCompras from "./components/CarrinhoCompras";
import HeaderContainer from "./components/HeaderContainer";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);
  const [resultSearch, setResultSearch] = useState("");
  const [userInput, setUserInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [resultPrice, setResultPrice] = useState(0);

  const handleClick = (product) => {
    if (currentSale.includes(product)) {
    } else {
      setCurrentSale([
        ...currentSale,
        products.find((item) => item.id === product.id),
      ]);
      totalPrice(product);
    }
  };

  const handleRemove = (product) => {
    setCurrentSale(currentSale.filter((item) => item.id !== product.id));
    setResultPrice(resultPrice - product.price);
  };

  const totalPrice = (item) => {
    setResultPrice(item.price + resultPrice);
  };
  const ShowProducts = (input) =>
    setFilteredProducts(
      products.filter(
        (item) =>
          item.name.toUpperCase().includes(input.toUpperCase()) ||
          item.category.toUpperCase().includes(input.toUpperCase())
      )
    );

  return (
    <main className="pageContainer">
      <HeaderContainer
        ShowProducts={ShowProducts}
        userInput={userInput}
        setUserInput={setUserInput}
        setResultSearch={setResultSearch}
      />
      <div className="containerSale">
        <MenuContainer
          currentSale={currentSale}
          totalPrice={totalPrice}
          userInput={resultSearch}
          filteredProducts={filteredProducts}
          handleClick={handleClick}
          products={products}
        />
        <CarrinhoCompras
          resultPrice={resultPrice}
          currentSale={currentSale}
          totalPrice={totalPrice}
          currentSale={currentSale}
          handleRemove={handleRemove}
          setCurrentSale={setCurrentSale}
          setResultPrice={setResultPrice}
        />
      </div>
    </main>
  );
}

export default App;
