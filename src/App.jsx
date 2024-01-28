
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

import Hero from './Components/Hero/Hero';

function App() {
  return (
    <div className="App bg-slate-900 ">
     <main>
  
<Routes>
  <Route path='/' element={<LandingPage/>} />
  

</Routes>
</main> 
    </div>
  );
}

export default App;
