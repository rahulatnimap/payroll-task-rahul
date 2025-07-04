import React from "react"
import Style from "./Login.module.scss"
import LOGO from "../../assets/PNG/FFC-logo.png"
import { Button, IconButton, InputAdornment, TextField } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form"
import axios from "axios";
import { LOGIN } from "../../services/endPoints";
import { post } from "../../services/publicRequest";
const Login = () => {
  const [show, setShow] = React.useState(false)
  const { handleSubmit , register , formState:{errors} } = useForm()

  const onSubmitLogin = async(data) => {
    const payload = {
      username : data.username,
      password : data.password
    }
try {
    const res = await post(LOGIN,payload)
    console.log("Success")
} catch (error) {
   console.log('error', error)
}



    // console.log('data', data , errors)
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
          {...register("username" , { required: "Username is required" })}
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