import cheemsImg from './assets/cheems.jpeg'
import videoFondo from './assets/construccion.mp4'
import './App.css'

function App() {

  return (
    <>
      <h1>Bryan Luzardo</h1>
      <img src={cheemsImg} alt="cheems imgeniero" />
      <h2 className='construccion uno'>Sitio en construccion</h2>
      <h2 className='construccion dos'>Solo para probar tarea</h2>
      <video loop autoPlay muted src={videoFondo}></video>
    </>
  )
}

export default App
