function Technology({name,specyfikacja,features,category,hours}) {
  return (
    <section>
      <h2>Technologia - {name}
        , Kategoria - {category}
        , Liczba godzin: {hours}
        , Specyfikacja - {specyfikacja.type}
        , Cechy - {features[2].props}</h2>
      <br/>
    </section>
  );
}

export default Technology;