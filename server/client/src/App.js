import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Branding from './Components/Branding/Branding';

// Pages
import Landing from './Pages/Landing/Landing';
import About from './Pages/About/About';
import Works from './Pages/Works/Works';
import Work from './Pages/Work/Work';

function App() {
  return (
    <BrowserRouter>
    <Branding/>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/works' element={<Works/>}/>
        <Route exact path='/works/:id' element={<Work/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
