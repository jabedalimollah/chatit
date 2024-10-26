import { lazy, useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectRoute from './auth/ProtectRoute';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './Redux/features/darkTheme/darkThemeSlice';
import ChangePassword from './pages/ChangePassword';
import DeleteAccount from './pages/DeleteAccount';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
// ================ import pages =====================
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

// let user = false;
function App() {
  const [auth, setAuth] = useState(null);
  const authUser = useSelector((state) => state.user.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('chatit');
    const isDark = JSON.parse(localStorage.getItem('chatit_darkmode'));
    // console.log('out', Boolean(isDark));
    if (Boolean(isDark)) {
      // console.log('true', Boolean(isDark));
      dispatch(setTheme(Boolean(isDark)));
    } else {
      // console.log('false', Boolean(isDark));
      dispatch(setTheme(Boolean(isDark)));
    }

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
          <Route path="/change_password" element={<ChangePassword />} />
          <Route path="/delete_account" element={<DeleteAccount />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<ProtectRoute user={!auth} redirect="/" />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
