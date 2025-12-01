import "./LoginSignup.css";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import authenticatedUsers from "./AuthenticatedUsers.js";
import PasswordInput from "../../Inputs/PasswordInput";
import TextInput from "../../Inputs/TextInput";
import EmailInput from "../../Inputs/EmailInput";
import Button from "../../Button/Button";
import { useState, useEffect } from "react";
import language from "../../../Constants/language";

function LoginSignup() {
  const currentPageData = pages.find((page) => page.link === "loginSignup");
  const [newCustomer, setNewCustomer] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [users, setUsers] = useState(authenticatedUsers);

  useEffect(
    function () {
      console.log(users);
    },
    [users],
  );

  function handleMode(e) {
    setNewCustomer((prevState) => !prevState);
    e.preventDefault();
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      alert(
        `Login successful for ${user.name} (${user.jobTitle} at ${user.company})`,
      );
    } else alert("No user found");
  }

  function handleSignup(e) {
    e.preventDefault();

    const newUser = {
      id: users.length + 1,
      name,
      jobTitle: "",
      company: "",
      email,
      password,
    };

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      alert(
        `${existingUser.name} (${existingUser.jobTitle} at ${existingUser.company}) exists!`,
      );
    } else {
      const newUsersArray = [...users, newUser];
      setUsers(newUsersArray);
      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => alert(`${name} created!`), 0);
    }
  }

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="A simple log in / sign up flow that users can switch between. For sign up, emails are validated (although needs improvement), passwords can be revealed and there are also password rules which include a strength rating from zxcvbn. Creating a new user adds them to the console. You can also log in with a new or existing account."
      />
      <div className="form__container">
        <form>
          <img
            src="./codecraft-logo.png"
            alt="Codecraft Logo"
            className="codecraft__logo"
          />
          {newCustomer ? (
            <Signup
              onToggle={handleMode}
              password={password}
              onPasswordChange={handlePasswordChange}
              name={name}
              onNameChange={handleNameChange}
              email={email}
              onEmailChange={handleEmailChange}
              onSumbit={handleSignup}
            />
          ) : (
            <Login
              onToggle={handleMode}
              password={password}
              onPasswordChange={handlePasswordChange}
              email={email}
              onEmailChange={handleEmailChange}
              onSumbit={handleLogin}
            />
          )}
        </form>
      </div>
    </>
  );
}

export default LoginSignup;

function Login({
  onToggle,
  password,
  onPasswordChange,
  email,
  onEmailChange,
  onSumbit,
}) {
  return (
    <div className="input__wrappers">
      <label>
        {language.email_address}
        <EmailInput value={email} onChange={onEmailChange} />
      </label>
      <label>
        {language.password}
        <PasswordInput
          hasRules={false}
          hasStrength={false}
          password={password}
          onPasswordChanged={onPasswordChange}
        />
      </label>
      <Button
        type="primary"
        label={language.log_in}
        onClick={onSumbit}
        fullWidth
        size="lg"
        className="main__cta"
      />
      <p className="switch__mode">
        Not registered?{" "}
        <a href="#" className="link__mode" onClick={onToggle}>
          {language.sign_up}
        </a>
      </p>
    </div>
  );
}

function Signup({
  onToggle,
  password,
  onPasswordChange,
  email,
  onEmailChange,
  onSumbit,
  name,
  onNameChange,
}) {
  return (
    <div className="input__wrappers">
      <label>
        {language.full_name}
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChange={onNameChange}
        />
      </label>
      <label>
        {language.email_address}
        <EmailInput value={email} onChange={onEmailChange} />
      </label>
      <label>
        {language.password}
        <PasswordInput
          hasRules={true}
          hasStrength={true}
          password={password}
          onPasswordChanged={onPasswordChange}
        />
      </label>
      <Button
        type="primary"
        label={language.sign_up}
        onClick={onSumbit}
        fullWidth
        size="lg"
        className="main__cta"
      />
      <p className="switch__mode">
        Already have an account?{" "}
        <a href="#" className="link__mode" onClick={onToggle}>
          {language.log_in}
        </a>
      </p>
    </div>
  );
}
