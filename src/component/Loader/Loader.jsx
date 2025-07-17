import { CircularProgress } from '@mui/material'
import style from "./Loader.module.scss"

const Loader = () => {
  return (
    <div className={style?.LoaderContainer} >
        <CircularProgress/>
    </div>
  )
}

export default Loader