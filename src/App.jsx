import HeroImage from './components/HeroImage'
import CardContainer from './components/CardContainer'
import InfoTextComponent from './components/InfoText'
import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import './App.css'



function App() {
 
  return (
    <>
      <HeroImage />
      <CardContainer />
      <InfoTextComponent />
      <Routes>
        <Route path="/" element={<Quiz />} />
      </Routes>
    </>
  )
}

export default App
