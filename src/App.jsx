import { useState } from 'react'
import Tabla from './components/Tabla'
import Formulario from './components/formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formulario></Formulario>
      <Tabla></Tabla>
    </>
  )
}

export default App
