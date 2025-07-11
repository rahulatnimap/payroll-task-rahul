import React, { useState } from 'react'
import TaskTable from './TaskTable'
import { Button, TextField } from '@mui/material'
import style from "./Mytask.module.scss"
import CreateModal from './createtask/CreateModal'
import { useDispatch } from 'react-redux'
import { setModal } from '../../redux/slices/taskSlice'
import FiltersModal from './createtask/FiltersModal'
import FilterButton from './createtask/FiltersModal'

const MyTask = () => {
  return (
    <div className={style.TaskContainer}>
      <div className={style.taskTopBar}>
       <FilterButton/>
       <div className={style.taskbarRight}>
        <TextField  id="filled-basic" label="Search" variant="standard" />
         <CreateModal/>
       </div>
      </div>
      <div>
        <TaskTable/>
      </div>
    </div>
  )
  
}

export default MyTask