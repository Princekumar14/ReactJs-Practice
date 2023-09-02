import React from 'react';
// import './App.css'; 
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // var [count,setCount] = React.useState(0)


  return (
    <div className="App">
      <Navbar title="home" />
      <div className="content">
        <Home />
      </div>

      {/* <>
        <h1>{count}</h1>
        <button onClick={() => { setCount(count + 1) }}>Plus</button>
        <button onClick={() => { setCount(count - 1) }}>Minus</button>

      </> */}
    </div>
  );
}

export default App;
