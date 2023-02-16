import "./App.css";
import IndexPage from "./Pages/IndexPage";
import UserLogin from "./Pages/UserLogin";
import UserSignUp from "./Pages/UserSignUp";
import AdminLogin from "./Pages/AdminLogin";
import UserDashboard from "./Pages/UserDashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUserActions } from "./store/current-user";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const alreadyLoggedInUser = localStorage.getItem("currentUser");
    if (alreadyLoggedInUser) {
      dispatch(
        currentUserActions.alreadyLoggedIn(JSON.parse(alreadyLoggedInUser))
      );
    }
  }, []);
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route
          path="/user/login"
          element={
            !currentUser ? <UserLogin /> : <Navigate to="/user/dashboard" />
          }
        />
        <Route
          path="/user/signup"
          element={
            !currentUser ? <UserSignUp /> : <Navigate to="/user/dashboard" />
          }
        />
        <Route
          path="/user/dashboard"
          element={
            currentUser ? <UserDashboard /> : <Navigate to="/user/login" />
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
