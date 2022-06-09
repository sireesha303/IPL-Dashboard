import { BrowserRouter,Route,Routes } from 'react-router-dom';

import './App.css';

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={< Home />}/>
        <Route path="/team-matches/:id" element={<TeamMatches/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
