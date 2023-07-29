
import './App.css'
import { HomeScreen } from './screens/homeScreen'
import { LoginScreen } from './screens/loginScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/home' element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
