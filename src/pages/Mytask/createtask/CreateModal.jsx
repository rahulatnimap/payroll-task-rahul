import { Box, Button, Modal, Tab, Tabs, Toolbar } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../redux/slices/taskSlice';
import TaskForm from './TaskForm';

const SentTab = () => <TaskForm/>;
const ScheduledTab = () => <TaskForm/>;

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CustomTabPanel = ({ children, value, index }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
        </div>
    );
};

const CreateModal = ({ open, maxWidth }) => {
    const { modal } = useSelector((state) => state.task)
    const dispatch = useDispatch()

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

     const handleCloseModal = (e) => {
    // if (reason && reason === "backdropClick") return;
    dispatch(setModal(false));
  };
    

    const handleSubmit = () => {
        // Handle modal submit logic
    };

    return (
         (
            <Modal open={modal}  onClose={handleCloseModal}>
                <Box
                    component="div"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: {
                            xs: "90%",
                            sm: "70%",
                            md: "50%",
                        },
                        height: "80vh",
                        boxShadow: 3,
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                    }}
                >
                    <Tabs value={value} onChange={handleChange} aria-label="assign tabs">
                        <Tab label="Assign to Others" {...a11yProps(0)} />
                        <Tab label="Assign to Me" {...a11yProps(1)} />
                    </Tabs>

                    <CustomTabPanel value={value} index={0}>
                        <SentTab />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <ScheduledTab />
                    </CustomTabPanel>
                <Toolbar sx={{ justifyContent: "end", gap: 2 }}>
              <Button variant="outlined" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button
                type="submit"
                // onClick={handleSubmit(onSubmit)}
                variant="contained"
                color="primary"
                // disabled={isSubmitting}
              >
                Add
              </Button>
            </Toolbar>

                </Box>
            </Modal>
        )
    );
};

export default CreateModal;
