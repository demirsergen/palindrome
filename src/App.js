import './App.css';
import {useState} from 'react';

function App() {

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  let input;
  let palindrome = [];

  const handleInput = (e) => {
    input = e.target.value;
  }

  const clearPalindrome = () => {
    palindrome = [];
  }

  const reverseWord = (value) => {
    for(let i = (value.length - 1); i > -1; i--) {
      const elem = value[i];
      palindrome.push(elem);
    }
  }

  const concatWord = () => {
    palindrome = palindrome.join('');
  }

  const confirmMatch = () => {
    if (input === palindrome) {
      setSuccess(true)
      return;
    }
    setFail(true)
  }

  const resetForm = () => {
    if (fail || success) {
      setFail(false);
      setSuccess(false);
    }
  }


  const checkPalindrome = (value) => {
    resetForm();
    reverseWord(value);
    concatWord();
    confirmMatch();
    clearPalindrome();
  }

  return (
    <div className="App">
      <div>
        <h1 className="title">Palindrome</h1>
        <input type="text" className="input" placeholder="enter a word..." onChange={e => handleInput(e)}/>
        <button className="button" onClick={() => checkPalindrome(input)}>Submit</button>
        {success && <div className="success">It's a Palindrome!</div>}
        {fail && <div className="fail">Try again!</div>}
      </div>
      
    </div>
  );
}

export default App;
