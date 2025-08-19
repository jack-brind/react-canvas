import { useState } from "react";

function EmailInput({ placeholder = "" }) {
  const [email, setEmail] = useState("");
  //const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  //const trimmedEmail = email.trim();
  //const validEmail = emailValidation.test(trimmedEmail);
  // const borderValidationStyle = {
  //   outline: `1px solid ${validEmail ? "var(--border-default)" : "red"}`,
  // };

  return (
    <input
      type="email"
      value={email}
      placeholder={placeholder}
      //style={borderValidationStyle}
      onChange={handleEmailInput}
    />
  );
}

export default EmailInput;
