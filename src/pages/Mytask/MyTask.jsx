import React, { useEffect, useState } from 'react'
import TaskTable from './TaskTable'
import { Button, TextField } from '@mui/material'
import style from "./Mytask.module.scss"
import CreateModal from './createtask/CreateModal'
import { useDispatch } from 'react-redux'
import { setModal } from '../../redux/slices/taskSlice'
import FiltersModal from './createtask/FiltersModal'
import FilterButton from './createtask/FiltersModal'
import useDebounce from '../../hooks/useDebounce'

const MyTask = () => {

  const [search, setSearch] = useState("");

  const DebouncedSearch = useDebounce(search, 900)
  return (
    <div className={style.TaskContainer}>
      <div className={style.taskTopBar}>
        <FilterButton />
        <div className={style.taskbarRight}>
          <TextField onChange={(e) => setSearch(e.target.value)} id="filled-basic" label="Search" variant="standard" />
          <CreateModal />
        </div>
      </div>
      <div>
        <TaskTable search={DebouncedSearch} />
      </div>
    </div>
  )

}

export default MyTask