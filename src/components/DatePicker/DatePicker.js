import React, { useState } from 'react';
import InputField from '../InputField/InputField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import StaticDatePicker from '@mui/lab/StaticDatePicker';



const DatePicker = (props) => {

 const [date, setDate] = useState('');
 const [showInputField, setShowInputField] = useState(true);
 const [newInputValue, setNewInputValue] = useState('');

 return (
  <div className='date-picker'>
   <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DateTimePicker
     renderInput={(props) => showInputField ? <InputField {...props}
      setTodoInput={newInputValue => setNewInputValue(newInputValue)}
      label="Choose a deadline"
      variant="standard"
     /> : null}
     label=""
     value={date}
     onChange={(newValue) => {
      props.setDate(newValue);
     }}
    />


    <InputField setTodoInput={newInputValue => setNewInputValue(newInputValue)} />


    {/* <StaticDatePicker
     displayStaticWrapperAs="desktop"
     openTo="day"
     value={date}
     onChange={(newValue) => {
      props.setDate(newValue);
     }}
     renderInput={(params) => <TextField {...params} />}
    /> */}
   </LocalizationProvider>
  </div>
 );
};

export default DatePicker;
