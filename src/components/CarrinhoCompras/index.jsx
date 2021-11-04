import CardCarrinho from "./CardCarrinho/CardCarrinho";
function CarrinhoCompras({
  currentSale,
  handleRemove,
  setCurrentSale,
  totalPrice,
  resultPrice,
  setResultPrice,
}) {
  const removeAll = () => setCurrentSale([]);

  return (
    <div className="carrinho">
      <h1 className="title">Carrinho de compras</h1>
      {currentSale.map((item) => (
        <CardCarrinho
          currentSale={currentSale}
          totalPrice={totalPrice}
          handleRemove={handleRemove}
          key={item.id}
          item={item}
        />
      ))}
      {currentSale.length < 1 ? (
        <div className="sacolaVazia">
          <h1>Sua sacola está vazia</h1> <p>Adicione itens</p>
        </div>
      ) : (
        <div className="carrinho-separador"></div>
      )}
      {currentSale.length > 0 ? (
        <div className="containerPrice">
          {resultPrice > 0 ? (
            <div className="totalPrice">
              <h1>Total</h1> <h2>R$ {resultPrice.toFixed(2)}</h2>
            </div>
          ) : (
            ""
          )}
          <button
            className="removeAll"
            onClick={() => {
              removeAll();
              setResultPrice(0);
            }}
          >
            Remover todos
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CarrinhoCompras;
