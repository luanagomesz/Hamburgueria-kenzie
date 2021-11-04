function Product({ id, handleClick, totalPrice }) {
  return (
    <div className="cardProduct">
      <figure>
        <img src={id.img} alt="" />
      </figure>
      <h1>{id.name}</h1>
      <p>{id.category}</p>
      <h2>R$ {id.price}</h2>
      <button
        onClick={() => {
          handleClick(id);
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default Product;
