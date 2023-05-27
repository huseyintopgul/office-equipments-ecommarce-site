import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Hakkimizda from './pages/Hakkimizda';
import Magazalarimiz from './pages/Magazalarimiz';
import Kosullar from './pages/Kosullar';
import Urunler from './pages/Urunler';
import Kurumsal from './pages/Kurumsal';
import Logout from './pages/Logout';
import HeaderMenu from './component/Header/HeaderMenu';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HeaderMenu />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/magazalarimiz" element={<Magazalarimiz />} />
          <Route path="/kosullar" element={<Kosullar />} />
          <Route path="/urunler" element={<Urunler />} />
          <Route path="/kurumsal" element={<Kurumsal />} />
          <Route path="/cikis" element={<Logout />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
