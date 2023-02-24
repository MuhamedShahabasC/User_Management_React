import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUserActions } from "../../store/current-user";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Swal from "sweetalert2";

const Home = (props) => {
  const { name, email } = props.userData;
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    Swal.fire({
      text: "Please wait...",
      imageUrl: "https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif",
      showConfirmButton: false,
      allowOutsideClick: false,
      width: "250px",
    });
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "amarnath123");
    data.append("cloud_name", "dxnisjppy");
    await fetch("https://api.cloudinary.com/v1_1/dxnisjppy/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        axios
          .post(
            `${process.env.REACT_APP_BACKEND_URL}/user/addImage`,
            {
              url: data.secure_url,
              email: userData.email,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userData.token}`,
              },
            }
          )
          .then((res) => {
            Swal.close();
            dispatch(currentUserActions.updateUser(res.data.updatedUser));
          })
          .catch((err) => {
            Swal.close();
            setError(err.response.data.message);
          });
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <Card className={classes.home}>
      <div className="mb-4">
        <img alt="" src="" />
        <form
          onSubmit={submitHandler}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          {userData.profilePic ? (
            <div className="p-0 border shadow rounded">
              <img
                src={userData.profilePic}
                alt=""
                style={{
                  objectFit: "contain",
                  maxWidth: "150px",
                }}
              />
            </div>
          ) : (
            <>
              <Card>
                <h5 className="text-center text-danger mt-3">
                  No Profile Photo
                </h5>
                <label htmlFor="addPic">
                  <input
                    name="addPic"
                    type="file"
                    className="form-control my-2"
                    alt=""
                    accept=".jpg"
                    onChange={handleChange}
                  />
                </label>
                <Button type="submit" rounded primary>
                  Add profile pic
                </Button>
                <h6 className="text-danger m-2">{error}</h6>
              </Card>
            </>
          )}
        </form>
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <h6>Name</h6>
          <h6>{name}</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6>E-mail</h6>
          <h6>{email}</h6>
        </div>
      </div>
    </Card>
  );
};

export default Home;
