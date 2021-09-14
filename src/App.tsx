import React from 'react';
import logo from './logo.svg';
import './App.css';

const { ipcRenderer } = window.require('electron');

function helloWorld() {
  console.log('Fetching JSON')
  fetch('https://s3.eu-west-1.amazonaws.com/directory.spatineo.com/tmp/tuulituhohaukka-stac/catalog/root2.json', { method: 'GET' })
    .then((response) => {
      response.json().then((json : any) => {
        console.log('Saving JSON');
        ipcRenderer.invoke('saveJson', {filename: 'bar.json', data: json}).then((result : any) => {
          console.log('SAVED!', result)
        })
      })
    })
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => helloWorld()}>Hello</button>
      </header>
    </div>
  );
}

export default App;
