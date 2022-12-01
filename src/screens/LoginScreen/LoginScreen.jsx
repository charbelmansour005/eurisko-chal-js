import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/user/userActions";
// mui & style
import classes from "./LoginScreen.module.css";
import { Paper, TextField, LinearProgress } from "@mui/material";
import { toast } from "react-toastify";
import LoginButtons from "../../components/LoginButtons/LoginButtons";
import LoginError from "../../components/LoginError/LoginError";
import { imageURL } from "../../helpers/randomizer";

const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      notifySuccess();
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <div className={classes.Main__body}>
      <Paper
        elevation={3}
        sx={{
          paddingTop: 0,
          paddingBottom: 4,
          width: 550,
        }}
      >
        {loading && <LinearProgress color="secondary" />}
        <form onSubmit={handleSubmit(submitForm)}>
          <LoginError />
          <div className={classes.center__div}>
            <img className={classes.main__image} src={imageURL} />
          </div>
          <div className={classes.center__div}>
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              sx={{ width: 350, mb: 2 }}
              name="username"
              autoFocus
              required
              margin="normal"
              {...register("username")}
              helperText={error && "Wrong credentials"}
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="outlined"
              sx={{ width: 350, mb: 2 }}
              type="password"
              required
              margin="normal"
              {...register("password")}
              helperText={error && "Wrong credentials"}
            />
            <LoginButtons />
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default LoginScreen;

const notifySuccess = () =>
  toast.success("Logged in!", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });