import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import  {myUseState} from './react'

function App() {
    let [clicks, SetClicks] = myUseState(0);
    console.dir(myUseState);
    const test = () => 'test'


    return (
        <div className="App">
            <h3>{clicks}</h3>
            <button onClick={()=> SetClicks(clicks+1)}>+</button>
        </div>
    );
}

export default App;
