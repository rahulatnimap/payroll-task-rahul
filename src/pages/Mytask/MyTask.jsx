import React, { useState } from 'react'
import TaskTable from './TaskTable'
import { Button, TextField } from '@mui/material'
import style from "./Mytask.module.scss"
import CreateModal from './createtask/CreateModal'
import { useDispatch } from 'react-redux'
import { setModal } from '../../redux/slices/taskSlice'

const MyTask = () => {

  const [openForm,setOpenForm] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className={style.TaskContainer}>
      <div className={style.taskTopBar}>
       <Button variant='contained'>Filters</Button>
       <div className={style.taskbarRight}>
        <TextField  id="filled-basic" label="Filled" variant="standard" />
        <Button onClick={()=> dispatch(setModal(true))} variant='contained'>Add Task</Button>
       </div>
      </div>
      <div>
        <TaskTable/>
      </div>
      <CreateModal
      open={openForm}
      maxWidth={"sm"}
      />
    </div>
  )
  
}

export default MyTask