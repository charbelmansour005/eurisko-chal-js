import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ErrorLinks.module.css";
import { CircularProgress } from "@mui/material";

const ErrorLinks = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/");
    }, 200);
  };

  const handleLoginRedirect = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 200);
  };

  return (
    <Fragment>
      <a className={classes.link__style} onClick={handleHomeRedirect}>
        {"←"} Go back Home
      </a>
      <a className={classes.link__style} onClick={handleLoginRedirect}>
        {"←"} Login
      </a>

      <div className={classes.loader__container}>
        {isLoading && <CircularProgress />}
      </div>
    </Fragment>
  );
};

export default ErrorLinks;
