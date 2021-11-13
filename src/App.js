import { useState } from 'react';
import axios from 'axios';


function App() {
  const [inputState, changeInput] = useState('');
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      oh yeah
      <div>
        <input id="text-input" placeholder="put in your text" value={inputState} onChange={(e) => changeInput(e.target.value)}></input>
        <div onClick={() => {axios.post('localhost:3030/api/twilio', inputState, {headers: { 'Content-Type': 'application/json' }})}} style={{width: '90px', height: '40px', backgroundColor: 'gray', border: '2px solid black'}}> SUBMIT ME </div>
      </div>
    </div>
  );
}

export default App;
