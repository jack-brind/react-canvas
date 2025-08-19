import IconButton from "../IconButton/IconButton.jsx";
import { EyeOff, Eye, Check, X } from "lucide-react";
import { useState } from "react";

function PasswordRule({ type, quantity, isMet }) {
  return (
    <span className="password-rule">
      {isMet ? (
        <Check color={`var(--text-green)`} className="validation-icon" />
      ) : (
        <X color={`var(--text-red)`} className="validation-icon" />
      )}
      {quantity} {type}
    </span>
  );
}

function PasswordInput({ hasRules }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRules = {
    length: 8,
    upper: 2,
    numbers: 1,
    symbols: 1,
  };

  const meetsLength = password.length >= passwordRules.length;
  const meetsUpper =
    (password.match(/[A-Z]/g) || []).length >= passwordRules.upper;
  const meetsNumbers =
    (password.match(/\d/g) || []).length >= passwordRules.numbers;
  const meetsSymbols =
    (password.match(/[^A-Za-z0-9]/g) || []).length >= passwordRules.symbols;

  function handlePasswordToggle(e) {
    setShowPassword((prevState) => !prevState);
    e.preventDefault();
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const inputStyle = {
    display: "flex",
    alignItems: "center",
    paddingRight: "32px",
  };

  return (
    <div className="password__group">
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password..."
          autocomplete="new-password"
          style={inputStyle}
          value={password}
          onChange={handlePasswordChange}
        />
        <IconButton
          onClick={handlePasswordToggle}
          size="xs"
          isMuted
          className="password__toggle"
          icon={showPassword ? <Eye /> : <EyeOff />}
        />
      </div>
      {hasRules && (
        <div className="rule-group">
          <PasswordRule
            isMet={meetsLength}
            type="characters"
            quantity={passwordRules.length}
          />
          <PasswordRule
            isMet={meetsUpper}
            type="uppercase"
            quantity={passwordRules.upper}
          />
          <PasswordRule
            isMet={meetsNumbers}
            type="number"
            quantity={passwordRules.numbers}
          />
          <PasswordRule
            isMet={meetsSymbols}
            type="symbol"
            quantity={passwordRules.symbols}
          />
        </div>
      )}
    </div>
  );
}

export default PasswordInput;
