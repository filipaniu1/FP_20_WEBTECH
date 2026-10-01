import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Navigation from "./components/Navigation.jsx"
import CourseCard from "./components/CourseCard.jsx"
import Technologies from "./components/Technologies.jsx"
import Book from './components/Book.jsx'
import Product from './components/Product.jsx'

function App() {

return(
    <div>
      <h1>Produkt</h1>
      <Product name="Laptop" price={3500} />
    </div>
  );
}

export default App;