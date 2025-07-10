import { Autocomplete, Box, Chip, FormControl, MenuItem, Select, TextField } from '@mui/material'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useLeadMembers from '../../../hooks/useLeaderMembers';
import { Controller, useForm } from "react-hook-form";
import CustomSelect from "../../../component/CustomSelect"
import { priorityOptions } from '../../../utils/utils';
import { useState } from 'react';
import MembersList from './MembersList';

const TaskForm = () => {
  const [usersModal, setUsersModal] = useState({ open: false, type: null });
   const setMembers = (memberIds) => {
    if (usersModal.open) setValue(usersModal.type, memberIds);
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const { leadMembers } = useLeadMembers();

  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event) => {
    console.log('leadMembers', leadMembers)
    console.log('first', event.target.value)
    setSelectedValues(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px", padding: "0px 20px", overflowY: "scroll" }}>
      <TextField label="Title" variant="standard" />
      <TextField label="Description" variant="standard" />
      <TextField type='file' label="Attach File" variant="standard" />
      {/* Lead/Customer Name */}
      <FormControl fullWidth sx={{ flex: 1 }}>
        {/* <InputLabel>Lead/Customer Name</InputLabel> */}
        <Controller
          name="LeadId"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={leadMembers}
              getOptionKey={(option) => option.id}
              onChange={(_, newValue) =>
                field.onChange(newValue ? newValue.id : null)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Lead/Customer Name"
                />
              )}
            />
          )}
        />
      </FormControl>
      <DatePicker label="Basic date picker" />
      <CustomSelect
        name="Priority"
        label="Priority"
        control={control}
        options={priorityOptions}
      />
      {/* <TextField label="Add Users" variant="standard" /> */}

      {/* <Select
        multiple
        value={selectedValues}
        onChange={handleChange}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
            {selected.map((val) => {
              const label = leadMembers.find((item) => item.id === val)?.label || val;
              return (
                <Chip key={val} label={label} color="primary" />
              );
            })}
          </Box>
        )}
        sx={{ minWidth: '15rem' }}
      >
        {leadMembers.map((val) => (
          <MenuItem key={val.id} value={val.id}>
            {val.label}
          </MenuItem>
        ))}
      </Select> */}

       <TextField
              name="UserIds"
              label="Add Users"
              value={
                watch("UserIds")
                  ? Object.keys(watch("UserIds")).length + " Users"
                  : ""
              }
              onClick={() => setUsersModal({ open: true, type: "UserIds" })}
              margin="normal"
              variant="standard"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            /> 
      <TextField
              name="TaskOwners"
              label="Add CC Members"
              value={
                watch("TaskOwners")
                  ? Object.keys(watch("TaskOwners")).length + " Users"
                  : ""
              }
              onClick={() => setUsersModal({ open: true, type: "TaskOwners" })}
              margin="normal"
              variant="standard"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
      <MembersList
            open={usersModal.open}
            handleClose={() => setUsersModal({ open: false, type: null })}
            setcheckedMembers={setMembers}
          />
    </div>
  )
}

export default TaskForm