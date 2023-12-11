
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import Products from './pages/Products';
function App() {
  return (
    <div className="">
      <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Products' element={<Products/>}/>
</Routes>

    </div>
  );
}

export default App;
