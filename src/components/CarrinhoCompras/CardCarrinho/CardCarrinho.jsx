function CardCarrinho({ item, handleRemove, totalPrice, currentSale }) {
  return (
    <div className="cardCarrinho">
      <figure>
        <img src={item.img} alt="" />
      </figure>
      <div>
        <h1>{item.name}</h1>
        <p>{item.category}</p>
      </div>
      <button
        onClick={() => {
          handleRemove(item);
        }}
      >
        Remover
      </button>
    </div>
  );
}

export default CardCarrinho;
