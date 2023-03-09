import '../styles/App.scss';
import '../fonts/KgTenThousandReasons-R1ll.ttf';
import { useState } from 'react';

function App() {

  //Variables de estado
  const [word, setWord] = useState('katakroker'); //almacenar la palabra que se deberá adivinar.
  const [userLetters, setUserLetters] = useState([]);//es un array para almacenar las letras que introduce la jugadora.
  const [numberOfErrors, setNumberOfErrors] = useState([]);
  const [lastLetter, setLastLetter] = useState(''); //es un string para almacenar la última letra introducida por la jugadora.

  //Variables comunes
  const letterOk = /^[a-zA-Zñáéíóúü]$/;
  //test: devuelve verdadero o falso si la cadena de búsqueda coincide con el patrón especificado. Esto significa que se usa para probar si una cadena contiene un patrón específico. Por lo tanto, es una herramienta útil para comprobar si una cadena de texto contiene el patrón deseado.

  /*
  Acciones que hay que hacer al arrancar la pag:
  - todo en vacio (muñeco, letras...)
  - reset nueva palabra del API
  Acciones despues del evento de la usuaria:
  - añadir letra y comprobar si esta se pinta y si no letras fallamas + monigote
  - escribir msj error si repites letra (falladas o acertadas)
  */
  const renderSolutionLetters = () => {
    const separador = '';
    return word.split(separador)
      .map(eachWord => eachWord.includes(userLetters) ? <li className="letter">{eachWord}</li> : <li className="letter"></li>)
  }

  const renderErrorLetters = () => {
    return userLetters.filter(letter => !word.includes(letter))
      .map((letter, index) => {
        return <li key={index} className="letter">{letter}</li>
      })
  }

  // const handleClickCount = (ev) => {
  //   ev.preventDefault();
  //   console.log('holis')
  //   setNumberOfErrors(numberOfErrors + 1)
  // }

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    if (letterOk.test(inputValue)) {
      setLastLetter(inputValue)
    } else {
      setLastLetter('');
    }
    const letters = [...userLetters]
    letters.push(inputValue)
    setUserLetters(letters)
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
            <ul className="letters" >{renderSolutionLetters()}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderErrorLetters()}
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input onChange={handleInput
            }
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
            />
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
