import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Grid,
} from "@mui/material";
import MembersList from "./MembersList";
import { DatePicker } from "@mui/x-date-pickers";
import CustomModal from "../../../component/CustomModal";
import CustomSelect from "../../../component/CustomSelect";
import { priorityOptions, statusOptions } from "../../../utils/utils";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "../../../redux/slices/taskSlice";

const FilterButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [membersModalOpen, setMembersModalOpen] = useState(false);
  const { filterData } = useSelector((store) => store?.task )
  const {control, handleSubmit, reset, watch, setValue} = useForm({defaultValues : {
    TaskStatus: filterData?.TaskStatus ||  "",
    Priority: filterData?.Priority ||  "",
    UserIds: filterData?.UserIds  || "",
    FromDueDate: filterData?.FromDueDate || null,
    ToDueDate: filterData?.ToDueDate || null,
  }})

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const setMembers = (memberIds) => {
    if (membersModalOpen) setValue("UserIds", memberIds);
  };


const dispatch = useDispatch();
  const onSubmit = (value) => {
      dispatch(setFilterData(value));
      handleClose();
      reset(value);
  };

  useEffect(() => {
  if (dialogOpen) {
    reset({
      TaskStatus: filterData?.TaskStatus || "",
      Priority: filterData?.Priority || "",
      UserIds: filterData?.UserIds || "",
      FromDueDate: filterData?.FromDueDate || null,
      ToDueDate: filterData?.ToDueDate || null,
    });
  }
}, [dialogOpen]);


  return (
    <div >
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Filter
      </Button>
      <CustomModal
      maxWidth="xs"
        title="Filter Options"
        open={dialogOpen}
        handleSubmit={handleSubmit(onSubmit)}
        onClose={handleClose}
      >
        <form>
          <CustomSelect
            label="By Status"
            name="TaskStatus"
            control={control}
            options={statusOptions}
            margin="normal"
          />
          <CustomSelect
            label="By Priority"
            name="Priority"
            control={control}
            options={priorityOptions}
          />
          
          <TextField
            label="By Members"
            value={watch("UserIds")
              ? Object.keys(watch("UserIds")).length + " Users"
              : ""}
            onClick={() => setMembersModalOpen(true)}
            margin="normal"
            size="small"
            variant="standard"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          <MembersList
            open={membersModalOpen}
            handleClose={() => setMembersModalOpen(false)}
            setcheckedMembers={setMembers}
          />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              
              <Controller
                  name="FromDueDate"
                  control={control}
                  render={({ field}) => (
                    <DatePicker
                      {...field}
                      label="From Due Date"
                      format="DD MMM YYYY"
                      sx={{ flex: 1 }}
                      slotProps={{ textField: { variant: "standard"} }}
                    />
                  )}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Controller
                  name="ToDueDate"
                  control={control}
                  render={({ field}) => (
                    <DatePicker
                      {...field}
                      label="To Due Date"
                      format="DD MMM YYYY"
                      sx={{ flex: 1 }}
                      slotProps={{ textField: { variant: "standard"} }}
                    />
                  )}
                />
            </Grid>
          </Grid>
        </form>
      </CustomModal>
    </div>
  );
};

export default FilterButton;
