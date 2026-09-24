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

  const specification = {
    language: "JavaScript",
    type:"Frontend"
  };

  const features = [
    {
      comps: "Komponenty",
    },
    {
      jsx:"JSX",
    },
    {
      props:"props"
    }
  ];

  return (
    <>
    
    <Header/>
    <br/>
        <Technology name="React" category="frontend" hours={125} specyfikacja={specification} features={features}/>
        <Technology name="PHP" category="backend" hours={200} specyfikacja={specification} features={features}/>
        <Technology name="JavaScript" category="frontend" hours={150} specyfikacja={specification} features={features}/>
        <Technology name="Angular" category="fromntend" hours={167} specyfikacja={specification} features={features}/>
        <Technology name="MySQL" category="backend" hours={195} specyfikacja={specification} features={features}/>
    </>
  )
}

export default App