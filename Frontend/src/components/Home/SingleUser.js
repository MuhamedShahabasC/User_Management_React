import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function SingleUser({ user, refreshUsers }) {
  const [name, setName] = useState(user.name);
  const [editButtonClick, setEdit] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    const handleOuterClick = (e) => {
      if (!inputRef.current.contains(e.target)) {
        setEdit(false);
        setName(user.name);
      }
    };
    window.addEventListener("click", handleOuterClick, true);
    return () => {
      window.removeEventListener("click", handleOuterClick);
    };
  }, []);
  const editHandler = (e) => {
    e.preventDefault();
    setEdit(!editButtonClick);
    setName(user.name);
  };
  const deleteHandler = () => {
    Swal.fire({
      text: `Proceed to delete -  ${name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dd0db0",
      cancelButtonColor: "#741188",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${process.env.REACT_APP_BACKEND_URL}/admin/deleteuser/${user._id}`
          )
          .then((res) => {
            Swal.fire({
              icon: "success",
              text: "User Deleted Successfully",
              showConfirmButton: false,
              timer: 1200,
              width: "300px",
            }).then(() => {
              refreshUsers();
            });
          })
          .catch((err) => {
            const { message } = err.response.data;
            Swal.fire({
              icon: "error",
              text: message,
              width: "300px",
            });
          });
      }
    });
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const confirmHandler = () => {
    setEdit(!editButtonClick);
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/admin/edituser/${user._id}`, {
        name,
      })
      .then((res) => refreshUsers())
      .catch((err) => {
        const { message } = err.response.data;
        Swal.fire({
          icon: "error",
          text: message,
          width: "300px",
        });
      });
  };
  return (
    <tr ref={inputRef}>
      <td>
        {editButtonClick ? (
          <input
            className="form-control"
            value={name}
            onChange={handleChange}
          />
        ) : (
          <span className="mx-3">{user.name}</span>
        )}
      </td>
      <td>
        <span className="mx-3">{user.email}</span>
      </td>
      <td>
        {editButtonClick ? (
          <div className="d-flex">
            <button onClick={confirmHandler} className="btn border mx-3">
              <i class="fa-regular fa-square-check"></i>
            </button>
            <button onClick={editHandler} className="btn border mx-3">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        ) : (
          <button onClick={editHandler} className="btn border mx-3">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        )}
      </td>
      <td>
        <button onClick={deleteHandler} className="btn border mx-3">
          <i class="fa-solid fa-user-slash"></i>
        </button>
      </td>
    </tr>
  );
}

export default SingleUser;
