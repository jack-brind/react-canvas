import IconButton from "../IconButton/IconButton.jsx";
import { EyeOff, Eye, Check, X } from "lucide-react";
import { useState } from "react";
import zxcvbn from "zxcvbn";
import language from "../../Constants/language.js";

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

function PasswordStrengthMeter({ password }) {
  const score = zxcvbn(password).score;

  return (
    <div className="strength__container">
      <div
        className="strength-segment"
        style={{
          background: `${score <= 1 ? "var(--text-red)" : score > 1 && score <= 3 ? "var(--text-orange)" : score === 4 ? "var(--text-green)" : "var(--background-grey-subtle)"}`,
        }}
      ></div>
      <div
        className="strength-segment"
        style={{
          background: `${score > 1 && score <= 3 ? "var(--text-orange)" : score === 4 ? "var(--text-green)" : "var(--background-grey-subtle)"}`,
        }}
      ></div>
      <div
        className="strength-segment"
        style={{
          background: `${score === 4 ? "var(--text-green)" : "var(--background-grey-subtle)"}`,
        }}
      ></div>
    </div>
  );
}

function PasswordInput({ hasRules, password, onPasswordChanged, hasStrength }) {
  const [showPassword, setShowPassword] = useState(false);

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

  const inputStyle = {
    display: "flex",
    alignItems: "center",
    paddingRight: "32px",
  };

  return (
    <div className="password__group">
      <div className="password-container">
        {hasStrength && password.length > 0 && (
          <PasswordStrengthMeter
            className="password__strength"
            password={password}
          />
        )}
        <input
          type={showPassword ? "text" : "password"}
          placeholder={language.placeholder.password}
          autoComplete="new-password"
          style={inputStyle}
          value={password}
          onChange={onPasswordChanged}
        />
        <IconButton
          onClick={handlePasswordToggle}
          size="md"
          isMuted
          className="password__toggle"
          style={{ zIndex: "20" }}
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
