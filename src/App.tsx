import React from 'react';
import './App.css';
import WebcamComponent from './components/Webcam'
import FacialRecognitionComponent from './components/FacialRecognitionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebcamComponent />
        <FacialRecognitionComponent/>
      </header>
    </div>
  );
}

export default App;
