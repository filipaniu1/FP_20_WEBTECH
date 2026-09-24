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

function App() {

  return (
    <>
    
    <Header/>
    <Navigation/>
    <CourseCard/>
    <main>
        <Technology/>
        <Student/>
        <InfoBox/>
        <Technologies/>
    </main>


    <Footer/>
    <Footer/>
    </>
  )
}



export default App