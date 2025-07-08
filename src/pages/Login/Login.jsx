import React from "react"
import Style from "./Login.module.scss"
import LOGO from "../../assets/PNG/FFC-logo.png"
import { Button, IconButton, InputAdornment, TextField } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form"
import axios from "axios";
import { LOGIN } from "../../services/endPoints";
import { PublicPost } from "../../services/publicRequest";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const [show, setShow] = React.useState(false)
  const { handleSubmit, register, formState: { errors }, reset } = useForm();
  const navigate = useNavigate()

  const onSubmitLogin = async (data) => {
    const payload = {
      Username: data.username,
      Password: data.password
    }
    try {
      const res = await PublicPost(LOGIN, payload)
      if (res.data.success) {
        const combined = `${data.username}:${data.password}`;
        const base64Encoded = btoa(combined);
        localStorage.setItem("token", base64Encoded);
        const userDetail = res.data?.userDetail?.data;
        localStorage.setItem("userId", userDetail?.UserId);
        localStorage.setItem("userName", userDetail?.Name);
        localStorage.setItem("userEmail", userDetail?.Email);
        localStorage.setItem("userImage", userDetail?.UserImage);
        toast.success("LoggedIn successfully");
        navigate("/mytask");
      }
      else {
        toast.error(res.data.errormessage);
      }
      reset()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className={Style.mainContainer}>
      <div className={Style.topContainer}>
        <img src={LOGO} alt="" />
        <p>Get Started with BETA Field Force</p>
      </div>
      <div className={Style.bottomContainer}>
        <form onSubmit={handleSubmit(onSubmitLogin)} action="">
          <TextField
            {...register("username", { required: "Username is required" })}
            sx={{ width: "100%" }}
            label="username"
            variant="standard"
            helperText={errors.username ? errors.username.message : " "}
            error={!!errors.username}
          />
          <TextField
            {...register("password", { required: "Password is required" })}
            type={!show ? "password" : "text"}
            sx={{ width: "100%" }}
            label="Password"
            variant="standard"
            error={!!errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShow((prev) => !prev)}
                    edge="start"
                    tabIndex={-1}
                  >
                    {show ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            helperText={errors.password ? errors.password.message : " "}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default Login