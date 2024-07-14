import { Routes, Route } from 'react-router-dom';
import KakaoLogin from './components/KakaoLogin';
import KakaoRedirectHandler from './pages/KakaoLogin/KakaoRedirectHandler';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<KakaoLogin />} />
      <Route path="/oauth" element={<KakaoRedirectHandler />} />
    </Routes>
  );
};

export default App;
