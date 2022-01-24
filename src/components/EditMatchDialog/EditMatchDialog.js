import React, { useEffect, useRef, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import PropTypes from 'prop-types';
import * as moment from 'moment';
import { AppointmentButton, AppointmentFormContainer, DateItem, DatePickerContainer, DialogContainer,Header,PriceContainer, PsychologistData, PsychologistDisplay, ErrorDisplay } from './style';

function EditMatchDialog(props) {
    const { onClose, open} = props;
    const [selectedDate, setSelectedDate] = React.useState(moment());

    const handleClose = () => {
        onClose();
      };

    const handleDateChange = (appointmentDate) => {        
        setSelectedDate(appointmentDate);
    }

    return (
        <Dialog onClose={handleClose} open={open} maxWidth="m">
            <DialogContainer>
                <CloseIcon onClick={handleClose} className="close-icon"/>
                <Header>Add match</Header>
                    <Formik                            
                            initialValues={{
                                
                            }}
                            validationSchema = {Yup.object({
                                
                            })}

                            onSubmit = {async (values,{setSubmitting,setStatus,resetForm}) => {
                                // console.log(values);
                                // if(values){
                                //     try{                               
                                //         await updateAppointmentRequest(values)
                                //         setSubmitting(false);
                                //         resetForm();
                                //         handleClose();
                                //     } catch(err){
                                //         setSubmitting(false);
                                //         resetForm();
                                //         setStatus({
                                //             errorMessage : err.response.data.title
                                //         });
                                //     }                                                                                                                                                                                        
                                // }  
                            }} 
                        >
                        {({ errors, touched,status,isSubmitting,setFieldValue, handleChange}) => (
                        <Form style={{width:'100%'}}>                         
                            
                            <DatePickerContainer>                               
                                <LocalizationProvider dateAdapter={AdapterDateMoment}>
                                    <DatePicker
                                        minDate={moment()}
                                        label="Appointment date"
                                        value={selectedDate}
                                        onChange={(newValue) => {
                                            handleDateChange(newValue)
                                        }}
                                        renderInput={(props) => <TextField {...props} />}                                       
                                    />
                                </LocalizationProvider>
                            </DatePickerContainer>   
                                                      
                        </Form>
                        )}
                    </Formik>               
            </DialogContainer>
        </Dialog>
    )
}

export default EditMatchDialog;
