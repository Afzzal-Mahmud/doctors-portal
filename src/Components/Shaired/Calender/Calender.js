import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
// import { useDate } from '../Hooks/useDate';

function Calender({date,setDate}) {
    /* now calander is just reciving the date value */
    // const [date, setDate] = React.useState(new Date());
    // const {date,setDate} = useDate()
    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={date}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    )
}
export default Calender