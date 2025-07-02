import Style from "./Login.module.scss"
import LoginBackground from "../../assets/JPEG/login-page-slider1.jpg"

const Login = () => {

  return (
     <div className={Style.mainContainer}>
      <div className={Style.leftContainer}>
        <h2>Daily Employee attendance tracking</h2>
        <h5>Application allows you to monitor your employee’s Check-In, Check-Out time and attendance from anywhere and at any time.</h5>
      </div>
      <div className={Style.rightContainer}>
        <h1>right</h1>
      </div>
     </div>
  )
}

export default Login