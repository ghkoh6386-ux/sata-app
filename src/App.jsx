import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import Community from './pages/CommunityPage'
import PlacePage from './pages/PlacePage'
import SafePage from './pages/SafePage'
import FaqPage from './pages/FaqPage'
import MyPage from './pages/MyPage'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
      <Header/>

      <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/search' element={<SearchPage/>} />
         <Route path='/community' element={<Community/>} />
         <Route path='/place' element={<PlacePage/>} />
         <Route path='/safe' element={<SafePage/>} />
         <Route path='/FAQ' element={<FaqPage/>} />
         <Route path='/mypage' element={<MyPage/>} />
         <Route path='/login' element={<LoginPage/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
