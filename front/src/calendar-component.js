import React from "react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Calendar = ({ selected, onSelectedChange }) => {
    const [date, setDate] = useState(selected);
    const isWeekday = date => {
        const day = date.getDay() ;
        return day !== 0 && day !== 6;
    };

    useEffect(() => {
        setDate(selected);
    }, [selected]);
    return (
        <DatePicker selected={date}  onChange={(date) => onSelectedChange(date)} filterDate={isWeekday} minDate={date} />
    );
};
