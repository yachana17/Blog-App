import logo from './logo.svg';
import './App.css';
import BlogDisplay from './components/BlogDisplay';
import Addblog from './components/Addblog';
import React from 'react';


function App() {
  return (
    <div className="App">
      <div>
        <BlogDisplay/>
      </div>
      <div>
        <Addblog/>
        </div>
    </div>
  );
}

export default App;
