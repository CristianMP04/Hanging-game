import { useEffect, useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import './App.css';
import {getRandomWord} from './helpers/getRandomWord';



function App() {

  const [word, setWord] = useState(getRandomWord);
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [ attempts, setAttempts ] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  // Determinar si la persona perdió
  useEffect( () => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]); // Hooks

  // Determinar si la persona gana
  useEffect(() => {
    console.log(hiddenWord);
    const currentHiddenWord = hiddenWord.split(' ').join(''); 
    if( currentHiddenWord === word) {
      setWon(true);
    }

  }, [hiddenWord]);

  const checkLetter = (letter: string) => {
    if(lose) return;
    if(won) return;
      
    if(!word.includes(letter) ) {
      setAttempts( Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');
    

    for(let i = 0; i < word.length; i++) {
      if(word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
      setHiddenWord(hiddenWordArray.join(' '));
  }

  const newGame = () => {
    const newWord = getRandomWord();
    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttempts(0);
    setLose(false);
    setWon(false);
  }

  return ( 
    <div className="App">
        
      {/* imagenes */}
      <HangImage imageNumber={ attempts } />

      {/* Palabra Oculta */}
      <h3>{hiddenWord}</h3>

      {/* Dontador de intentos */}
      <h3>Intentos: {attempts}</h3>
      
      {/* Mensaje si perdió */}
      {
        (lose) 
        ? <h2>Perdió <br /> {word}</h2>
        : ''
      }

      {/* Mensaje si Ganó */}
      {
        (won) 
        ? <h2>Felicidades, usted ganó</h2>
        : ''
      }
      
      {/* Botones de letras */}
      {
        letters.map( (letter) => (
          <button
            onClick={ () => checkLetter(letter)} 
            key={letter}>
                {letter}
          </button>
        ))
      }
      
      <br /><br />
      <button
      onClick={newGame}>¿Nuevo Juego?</button>


    </div>
  );
  
}

export default App
