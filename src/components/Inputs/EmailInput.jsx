import language from "../../Constants/language";
import InputMessage from "../InputMessage/InputMessage";
import { useState } from "react";

function EmailInput({
  placeholder = language.placeholder.email,
  value,
  onChange,
}) {
  const [valid, setValid] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailCheck = emailRegex.test(value);

  const invalidStyle = {
    outline: `1px solid var(--colour-red-50)`,
  };

  function handleValidateEmail() {
    if (emailCheck) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  return (
    <>
      <input
        type="email"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleValidateEmail}
        style={valid ? null : invalidStyle}
      />

      <div
        className={
          valid
            ? `input-message__container`
            : `input-message__container--visible`
        }
      >
        {!valid && (
          <InputMessage
            valid={valid}
            message={language.validation.invalid_email}
            type="warning"
          />
        )}
      </div>
    </>
  );
}

export default EmailInput;
