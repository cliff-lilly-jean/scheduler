import React, { useState } from 'react';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TextField } from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import StaticDatePicker from '@mui/lab/StaticDatePicker';



const DatePicker = () => {

 const [date, setDate] = useState('');

 return (
  <div>
   <LocalizationProvider dateAdapter={AdapterDateFns}>
    {/* <DateTimePicker
     renderInput={(props) => <TextField {...props}
      // className="todo-app__text-field"
      // id="standard-basic"
      label="Choose a deadline"
      variant="standard"
     />}
     label=""
     value={date}
     onChange={(newValue) => {
      setDate(newValue);
     }}
    /> */}
    <StaticDatePicker
     displayStaticWrapperAs="desktop"
     openTo="day"
     value={date}
     onChange={(newValue) => {
      setDate(newValue);
     }}
     renderInput={(params) => <TextField {...params} />}
    />
   </LocalizationProvider>
  </div>
 );
};

export default DatePicker;
