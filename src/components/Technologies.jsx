function Technologies(){

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
  ];

    return(
        <div>
            <h1>Technologie</h1>

            <h2>Pierwsza technologia</h2>
            <p>ID: {technologies[0].id}</p>
            <p>Nazwa: {technologies[0].name}</p>
            <p>Kategoria: {technologies[0].category}</p>

            <h2>Druga technologia</h2>
            <p>ID: {technologies[1].id}</p>
            <p>Nazwa: {technologies[1].name}</p>
            <p>Kategoria: {technologies[1].category}</p>

            <h2>Trzecia technologia</h2>
            <p>ID: {technologies[2].id}</p>
            <p>Nazwa: {technologies[2].name}</p>
            <p>Kategoria: {technologies[2].category}</p>
            
        </div>
    )
}

export default Technologies