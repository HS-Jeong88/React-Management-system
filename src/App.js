import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import axios from "axios";
import { computeHeadingLevel } from '@testing-library/react';

class App extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h2>Let's develop management system!</h2>
        </header>
      </div>
    );
  }
}

export default App;
