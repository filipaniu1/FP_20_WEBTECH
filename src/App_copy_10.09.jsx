import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Twoje imię i nazwisko",
    technologiesCount: 3
  };

  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
  };

  const student = {
  name: "Filip",
  surname: "Poreba",
  className: "4P",
  specialization: "technik programista"
  };

  const course = {
  name: "Aplikacje webowe",
  teacher: "Rafał Taraszka",
  hours: 999,
  completed: 8
  };

  return (
    <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>

      <p>{technology.name}</p>
      <p>Kategoria: {technology.category}</p>
      <p>Liczba godzin: {technology.hours}</p>


      <p>Uczeń: {student.name} {student.surname}</p>
      <p>Klasa: {student.className}</p>
      <p>Kierunek: {student.specialization}</p>

      <section>
        <h2 className='nazwa_kursu'>
          Nazwa kursu: {course.name}
        </h2>
        <p>Nauczyciel: {course.teacher}</p>
        <p>Ilość godzin: {course.hours}</p>
        <p>Godziny skończone: {course.completed}</p>
      </section>

    </div>
  );
}

export default App
