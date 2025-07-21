import React, { useState } from 'react';
import TaskTable from './TaskTable';
import { Button, TextField } from '@mui/material';
import style from './Mytask.module.scss';
import CreateModal from './createtask/CreateModal';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterData } from '../../redux/slices/taskSlice'; // 👈 add this
import FilterButton from './createtask/FiltersModal';
import useDebounce from '../../hooks/useDebounce';

const MyTask = () => {
  const [search, setSearch] = useState('');
  const { filterData } = useSelector((store) => store.task);
  const dispatch = useDispatch();

  const DebouncedSearch = useDebounce(search, 900);

  // 👇 Utility to check if any filter is active
  const isFilterActive = () => {
    return (
      filterData?.TaskStatus ||
      filterData?.Priority ||
      (filterData?.UserIds && Object.keys(filterData.UserIds).length > 0) ||
      filterData?.FromDueDate ||
      filterData?.ToDueDate
    );
  };

  const handleClearFilter = () => {
    dispatch(
      setFilterData({
        TaskStatus: '',
        Priority: '',
        UserIds: '',
        FromDueDate: null,
        ToDueDate: null,
      })
    );
  };

  return (
    <div className={style.TaskContainer}>
      <div className={style.taskTopBar}>
        <div style={{ display:"flex"}}>
          <FilterButton />

          {isFilterActive() && (
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClearFilter}
            style={{ marginLeft: '0.2rem', height: 'fit-content' , width:"fit-content" }}
          >
            Clear Filter
          </Button>
        )}
          </div>

        

        <div className={style.taskbarRight}>
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            id="filled-basic"
            label="Search"
            variant="standard"
          />
          <CreateModal />
        </div>
      </div>
      <div>
        <TaskTable search={DebouncedSearch} />
      </div>
    </div>
  );
};

export default MyTask;
