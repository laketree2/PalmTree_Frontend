import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface LoginResponse {
  result: {
    user_id: string;
    jwt: string;
  };
}

const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      axios
        .post<LoginResponse>('/login/kakaologin', { code })
        .then((response: AxiosResponse<LoginResponse>) => {
          const data = response.data;
          console.log(data);
          console.log(data.result.user_id);
          console.log(data.result.jwt);

          navigate('/');
        })
        .catch((error: AxiosError) => {
          console.error('로그인 실패', error);
        });
    } else {
      console.error('인가 코드를 찾을 수 없음');
    }
  }, [location, navigate]);

  return <div>로딩 중...</div>;
};

export default RedirectHandler;
