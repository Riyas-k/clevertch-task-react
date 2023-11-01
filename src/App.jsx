
// import './App.css'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import View from './components/View'

function App() {


  return (
    <>
   
   <BrowserRouter> 
   <Routes>
    <Route path='/' element={ <Home />}/>
    <Route path='/view' element={ <View />}/>
   </Routes>
  
   </BrowserRouter> 
    </>
  )
}

export default App
