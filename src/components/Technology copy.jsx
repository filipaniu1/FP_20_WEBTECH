function Technology(props) {
  return (
    <section>
      <h2>Technologia - {props.name}
        , Kategoria - {props.category}
        , Liczba godzin: {props.hours}
        , Specyfikacja - {props.specyfikacja.type}
        , Cechy - {props.features[2].props}</h2>
      <br/>
    </section>
  );
}

export default Technology;