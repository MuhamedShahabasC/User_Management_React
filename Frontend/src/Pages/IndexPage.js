import React from "react";

import Card from "../components/UI/Card/Card";
import classes from "../components/Home/Home.module.css";
import Button from "../components/UI/Button/Button";
import { Link } from "react-router-dom";

const IndexPage = (props) => {
  return (
    <>
      <Card className={classes.home}>
        <h1 className="my-4">User Management</h1>
        <Link to="/user/login">
          <Button className='m-2'>User LogIn</Button>
        </Link>
        <Link to="/user/signup">
          <Button className='m-2'>User Sign up</Button>
        </Link>
        <Link to="/admin/login">
          <Button className='m-2'>Admin LogIn</Button>
        </Link>
        
      </Card>
    </>
  );
};

export default IndexPage;
