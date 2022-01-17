import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Category} from './components/Category';
import {Model} from './components/Model';
import {BrowserRouter , Route , Routes , NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <div className="App container">

      <h3 className="d-flex justify-content-center m-3">
        Fabrik - Digital Marketplace
      </h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/category">
              Category
            </NavLink>
            </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/model">
              Model
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/model" element={<Model />}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
