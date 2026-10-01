function Technology({ id, name, category, hours }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Nazwa: {name}</p>
      <p>Kategoria: {category}</p>
      {hours && <p>Liczba godzin: {hours}</p>}
    </div>
  );
}

function Technologies() {
  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
    },
    {
      id: 2,
      name: "JS",
      category: "Backend",
    },
    {
      id: 3,
      name: "HTML",
      category: "Frontend",
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
    },
    {
      id: 5,
      name: "MongoDB",
      category: "Baza danych",
      hours: 20
    }
  ];

  return (
    <div>
      <h1>Technologie</h1>

      {technologies.map((technology) => (
        <Technology 
          key={technology.id}
          id={technology.id}
          name={technology.name}
          category={technology.category}
          hours={technology.hours}
        />
      ))}
    </div>
  );
}

export default Technologies;