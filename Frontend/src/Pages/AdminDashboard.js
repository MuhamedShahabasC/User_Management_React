import { useNavigate } from "react-router-dom";
import AdminHome from "../components/Home/AdminHome";
import MainHeader from "../components/MainHeader/MainHeader";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
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
