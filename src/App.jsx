import './App.css'

import Lista from './components/list/Lista';
import Detalles from './components/new/Detalles';
import { Route, Routes} from 'react-router';
import Layout from './components/shared/Layout';
import NotFounded from './components/shared/NotFounded';
import Modal from './components/shared/Modal';
import { useContext, useEffect } from 'react';
import { Contexto } from './services/Memory';
import { pedirMetas } from './services/Requests';

function App() {
  
  const [,dispatch] = useContext(Contexto);


  useEffect(() => {
    async function fetchData(){
      const metas = await pedirMetas();
      dispatch({ tipo: 'colocar', metas})

    }
      fetchData();
  },[dispatch])

  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista />} >
          <Route path="/lista/:id" element={
          <Modal>
            <Detalles />
          </Modal>} 
          />
        </Route>
        <Route path="/nueva" element={<Detalles />} />
      </Route> 
      <Route path='*' element={<NotFounded />} />
    </Routes>
   
  );
}

export default App
