import axios from 'axios'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import "./App.css"
import Details from './components/Details'
import Meals from './components/Meals'
const App = () => {

  return (
  <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Meals/>}/>
  <Route path='/:id' element={<Details/>}/>
</Routes>
</BrowserRouter>
  </>
  )
}

export default App
