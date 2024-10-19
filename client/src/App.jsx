import { lazy, useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectRoute from './auth/ProtectRoute';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
// ================ import pages =====================
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
// const Chat = lazy(() => import("./pages/Chat"));
// const Groups = lazy(() => import("./pages/Groups"));

// let user = false;
function App() {
  const [auth, setAuth] = useState(null);
  const authUser = useSelector((state) => state.user.authUser);
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('chatit');

    if (login) {
      navigate('/');
      setAuth(login);
    } else {
      navigate('/login');
      setAuth(null);
    }
  }, [authUser]);

  return (
    <>
      <Routes>
        <Route element={<ProtectRoute user={auth} />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} /> */}
        </Route>
        <Route element={<ProtectRoute user={!auth} redirect="/" />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
