import { Autocomplete, FormControl, TextField } from '@mui/material'
import useLeadMembers from '../../../hooks/useLeaderMembers';
import { Controller, useForm } from "react-hook-form";
import CustomSelect from "../../../component/CustomSelect"
import { priorityOptions } from '../../../utils/utils';

const TaskForm = () => {
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

  return (
    <div style={{display:"flex",flexDirection:"column" , gap:"15px" , padding:"0px 20px"}}>
        <TextField label="Title" variant="standard"/>
        <TextField label="Description" variant="standard"/>
        <TextField type='file' label="Attach File" variant="standard"/>
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
        <TextField label="Select due Date" variant="standard"/>
        <CustomSelect
        name="Priority"
        label="Priority"
        control={control}
        options={priorityOptions}
        />
        <TextField label="Add Users" variant="standard"/>
        <TextField label="Add CC Members" variant="standard"/>
    </div>
  )
}

export default TaskForm