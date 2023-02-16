import { useNavigate } from "react-router-dom";
import AdminHome from "../components/Home/AdminHome";
import { useDispatch } from "react-redux";
import MainHeader from "../components/MainHeader/MainHeader";
import { adminSliceActions } from "../store/admin";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(adminSliceActions.logout());
    navigate("/admin/login");
  };

  return (
    <>
      <MainHeader onLogout={logoutHandler} />
      <AdminHome />
    </>
  );
};

export default AdminDashboard;
