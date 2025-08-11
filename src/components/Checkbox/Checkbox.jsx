import "./Checkbox.css";
import { useState } from "react";
import { Check } from "lucide-react";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className='checkbox__container'>
      <input type="checkbox" onChange={() => setChecked(!checked)} />
      <svg
        className={`checkbox ${checked ? "checkbox--active" : ""}`}
        aria-hidden="true"
        viewBox="0 0 14 14"
        fill="none"
      >
        <Check />
      </svg>
      This is a checkbox
    </label>
  );
}

export default Checkbox;
