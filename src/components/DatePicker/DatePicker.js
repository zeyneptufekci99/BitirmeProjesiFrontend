import "./DatePicker.style.css";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const DatePickerComponent = ({
  defaultDate,
  selectedDate = (date) => {},
  label,
}) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="datePickerBase">
      <label>
        <span className="label">{label}</span>
      </label>

      <DatePicker
        selected={defaultDate ?? date}
        onChange={(date) => {
          setDate(date);
          selectedDate(date);
        }}
      />
    </div>
  );
};

export default DatePickerComponent;
