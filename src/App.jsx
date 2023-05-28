import './App.css'

import Lista from './components/list/Lista';
import Detalles from './components/new/Detalles';
import { Route, Routes} from 'react-router';
import Layout from './components/shared/Layout';
import NotFounded from './components/shared/NotFounded';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/nueva" element={<Detalles />} />
      </Route> 
      <Route path='*' element={<NotFounded />} />
    </Routes>
   
  );
}

export default App
