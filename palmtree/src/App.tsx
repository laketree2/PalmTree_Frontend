import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KakaoLogin from './components/KakaoLogin';
import KakaoRedirectHandler from './pages/KakaoLogin/KakaoRedirectHandler';
import React from 'react';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<KakaoLogin />} />
      <Route path="/oauth" element={<KakaoRedirectHandler />} />
    </Routes>
  );
};

export default App;
