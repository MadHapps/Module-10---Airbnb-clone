import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import image from './images/katie-zaferes.png'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Card image={image} rating={5} ratingCount={6} country='USA' description='Life lessons with Katie Zaferes' price={136} />
    </div>
  )
}

export default App
