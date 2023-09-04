import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { Routes, Route, Outlet } from 'react-router-dom';
import BlogDetails from './BlogDetails';
function App() {
  // var [count,setCount] = React.useState(0)


  return (
    <div className="App">
      <Navbar title="home" />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />}/>
            <Route path='/create' element={<Create />} />
            <Route path='*' element={<div>Error page</div>} />
            <Route path='/blogs/:id' element={<BlogDetails />} />

          {/* </Route> */}
        </Routes>

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
