import { lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./auth/ProtectRoute";

// ================ import pages =====================
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
// const Chat = lazy(() => import("./pages/Chat"));
// const Groups = lazy(() => import("./pages/Groups"));

let user = true;
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} /> */}
          </Route>
          <Route element={<ProtectRoute user={!user} redirect="/" />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
