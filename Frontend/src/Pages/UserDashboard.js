import Home from "../components/Home/Home";
import MainHeader from "./../components/MainHeader/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { currentUserActions } from "../store/current-user";
import { useNavigate } from "react-router-dom";


const UserDashboard = () => {
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(currentUserActions.logout())
    navigate('/')
  }

  return (
    <>
      <MainHeader onLogout = {logoutHandler}/>
      <Home userData={userData} />
    </>
  );
};

export default UserDashboard;
