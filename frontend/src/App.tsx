import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// アプリのルーティング設定
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
