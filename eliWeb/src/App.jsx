import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  //const [count, setCount] = useState(0)

  return (
	  <div>
    	<b>¡Hola Mundo!</b>
	  	<MyButton />
	  </div>
  );
}

export default App
