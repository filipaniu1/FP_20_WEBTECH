function Product({ name, price }) {
  const handleClick = () => {
    console.log(`Wybrano produkt: ${name}`);
  }
  return (
    <div>
      <h3>{name}</h3>
      <p>Cena: {price} zł</p>
      <button onClick={handleClick}>
        Pokaż produkt
      </button>
    </div>
  );
}

export default Product;