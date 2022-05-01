import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainHeader from './components/MainHeader'
import Home from './pages/Homepage'
import Cart from './pages/CartPage'
import { Provider } from "react-redux"
import Store from "./redux/store/index";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className='App bg-light'>
          <MainHeader />
          <div className='container mt-5'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
