import { useState, useEffect } from 'react'
import {BrowserRouter, useRoutes, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Homepage from './pages/Homepage';

function App() {
  const [light, setLight] = useState(() => {
    const storedLight = localStorage.getItem('light');
    return storedLight ? JSON.parse(storedLight) : false;
  });

  const toggleLight = () => {
    const newLightState = !light;
    setLight(newLightState);
    localStorage.setItem('light', JSON.stringify(newLightState));
  }

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--background-color', light ? '#90E4C1' : '#014D4E'
    );

  })

  let element = useRoutes([
    { 
      path: '/', 
      element: <Homepage /> 
    },
  ])

  return (
    <div className="App">
      <Header toggleLight={toggleLight} light={light}>

      </Header>
      <main>
        {element}
      </main>
    </div>
  )
}

export default App
