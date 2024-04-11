import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { formatISO } from "date-fns";

const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);

  const handleSelect = (item: any) => {
    setState([item.selection]);
    // フォームの入力フィールドの値を更新
    const startDateInput = document.getElementById(
      "startDate"
    ) as HTMLInputElement;
    const endDateInput = document.getElementById("endDate") as HTMLInputElement;
    if (startDateInput && endDateInput) {
      startDateInput.value = item.selection.startDate
        ? formatISO(item.selection.startDate)
        : "";
      endDateInput.value = item.selection.endDate
        ? formatISO(item.selection.endDate)
        : "";
    }
  };

  return (
    <>
      <DateRange
        editableDateInputs={true}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      <input type="hidden" id="startDate" name="startDate" />
      <input type="hidden" id="endDate" name="endDate" />
    </>
  );
};

export default Calendar;
