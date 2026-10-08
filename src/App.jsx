import React from 'react';
import Technologies from './components/Technologies';


function App() { 
const technologies = [
{ id: 1, name: "React", category: "Frontend", hours: 30, image: "/images/react.webp" },
{ id: 2, name: "Node.js", category: "Backend", hours: 40, image: "/images/nodejs.webp" },
{ id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "/images/mysql.webp" },
{ id: 4, name: "Express", category: "Backend", hours: 25, image: "/images/express.webp" },
{ id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "/images/mongodb.webp" },
{ id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "/images/bootstrap.webp" },
{ id: 7, name: "CSS", category: "Frontend", hours: 20, image: "/images/css.webp" },
{ id: 8, name: "HTML", category: "Frontend", hours: 10, image: "/images/html.webp" },
{ id: 9, name: "PHP", category: "Backend", hours: 35, image: "/images/php.webp" }
];


  return (
    <>
      {technologies.map((tech)=>(
        <Technologies
        key={tech.id}
        image={tech.image}
        id={tech.id}
        name={tech.name}
        category={tech.category}
        hours={tech.hours}
        />
        
      ))}
    </>
  );
}

export default App;