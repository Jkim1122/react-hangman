import { useState } from 'react'
import './App.css'

const words = [
  "marriageproof",
  "minionette",
  "unlichened",
  "electrocardiographic",
  "hippophagy",
  "polyphore",
  "debellate",
  "zyga",
  "antedonin",
  "hirudinean",
  "foremastman",
  "metapolitics",
  "bianisidine",
  "gros",
  "superindifferent",
  "collar",
  "maculose",
  "unphysically",
  "narrowish",
  "Bartonia",
  "inadherent",
  "arbitrary",
  "forefeelingly",
  "palame",
  "vina",
  "northwestward"
]
function App() {
  const [puzzle, setPuzzle] = useState(randomWord())
  const [guessedLetters, setGuessLetters] = useState([])
  const [wrongLetter, setWrongLetter] = useState(0)
  const [letter, setLetter] = useState('')

  function randomWord() {
    let index = Math.floor(Math.random() * words.length);
    return words[index]
    // <>
    //   <h1 id="newPuzzle">random word:{randomWord[index]}</h1>
    // </>
    //   );
    }
  console.log(letter)
  function handleGuess(letter) {
    if (guessedLetters.includes(letter)) {
      alert("Letter already guessed")
      document.querySelector("#input").value = ''
    }
    else if (puzzle.includes(letter)){   
      setGuessLetters([...guessedLetters, letter])
      console.log("huzzah");   //reveal letter
      document.querySelector("#input").value = ''
    }
    else {
      setGuessLetters([...guessedLetters, letter])
      setWrongLetter(wrongLetter + 1)
      document.querySelector("#input").value = ''
      if ( wrongLetter === 6){
        alert("GAME OVER")
      }
      // console.log(wrongLetter)
    }
  }

  // function status() {
  //   wrongLetter === 6 ? "GAME OVER" : 6 - {wrongLetter}
  // }

  let wordToGuess = puzzle.split("").map((letter) => guessedLetters.includes(letter) ? letter : "_").join(" ")
  // letter = '_')
  //  => guessedLetters(letter) ? letter : "_").join(" ")
console.log(guessedLetters)
console.log(wrongLetter)
  return (
    <>
    <div>
      <h1>Hangman Game</h1>
      <div>{wordToGuess}</div>
      <input id="input" type='text'onChange={(event) => setLetter(event.target.value)}/>
      <button type="submit" onClick={() => handleGuess(letter)}>guess letter</button>
      <div>Past letters: <p>{guessedLetters}</p>
      </div>
      <div>Tries left: {6 - wrongLetter}</div>
    </div>
    </>
  )
}

export default App
