import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './pages/Layout';
import Dasbord from './pages/dasboard'
import AddEmp from './pages/addEmp';
import View from './pages/view';
import EmpContextProvider from './context/context'; 
import SingleCard from './component/singlecard';
import EditEmp from './pages/editEmp';
function App() {

  return (
    <div>
      <EmpContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Dasbord/>}/>
        <Route path='addEmp' element={<AddEmp/>}/>
         <Route path='view' element={<View/>}/>
         <Route path='viewEmp/:id' element={<SingleCard/>}/>
         <Route path='editEMP/:id' element={<EditEmp/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </EmpContextProvider>
    </div>
  );
}

export default App
