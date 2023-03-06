import '../styles/App.scss';
import '../fonts/KgTenThousandReasons-R1ll.ttf';
import { useState } from 'react';

function App() {
  const [writeLetter , setWriteLetter] = useState('');
  const [solution , setSolution] = useState('macarron');
  const [numberOfErrors , setNumberOfErrors] = useState(0);
  //const [count , setCount] = useState(0);
  
  /*
  Acciones que hay que hacer al arrancar la pag:
  - todo en vacio (muñeco, letras...)
  - reset nueva palabra del API
  Acciones despues del evento de la usuaria:
  - añadir letra y comprobar si esta se pinta y si no letras fallamas + monigote
  - escribir msj error si repites letra (falladas o acertadas)
  */
  const handleClickCount = (ev) => {
    ev.preventDefault();
    console.log('holis')
    setNumberOfErrors(numberOfErrors+1)
  }
  const handleInput = (event) => {
  }

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li>
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input onChange={ handleInput
            }
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter" /> 
               <button onClick={handleClickCount}>Contador</button>
          </form>
        </section>
        <section className={"dummy error-" + numberOfErrors}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      
      </main>
    </div>
  );
}
export default App;
