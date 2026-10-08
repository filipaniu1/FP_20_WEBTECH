function Technologies({ id, name, category, hours,image }) {
  return (
    <div>
      <img src={image}></img> 
      <h2>{id}</h2>
      <h2>Nazwa technologi: {name}</h2>
      <article>Kategoria: {category}</article>
      <h4>Czas nauki: {hours}h</h4>
    </div>
  );
}


export default Technologies;