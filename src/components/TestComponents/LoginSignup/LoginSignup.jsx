import "./LoginSignup.css";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
//import authenticatedUsers from "./AuthenticatedUsers.js";
import PasswordInput from "../../Inputs/PasswordInput";
import TextInput from "../../Inputs/TextInput";
import EmailInput from "../../Inputs/EmailInput";
import Button from "../../Button/Button";
import { useState } from "react";

function ProfileCard() {
  const currentPageData = pages.find((page) => page.link === "loginSignup");
  const [newCustomer, setNewCustomer] = useState(false);

  function handleMode(e) {
    setNewCustomer((prevState) => !prevState);
    e.preventDefault();
  }

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="A simple log in / sign up flow that users can switch between. It will include validating email formats and ensuring passwords meet a minimum set of requirements as well as checking to see if a user already exists (just using a simple array of dummy users) and returning success or failure. The password box will be custom and allow showing / hiding the password."
      />
      <form>
        {newCustomer ? (
          <Signup onToggle={handleMode} />
        ) : (
          <Login onToggle={handleMode} />
        )}
      </form>
    </>
  );
}

export default ProfileCard;

function Login({ onToggle }) {
  return (
    <div className="input__wrappers">
      <EmailInput placeholder="name@example.com" />
      <PasswordInput hasRules={false} />
      <Button type="primary" label="Log in" onClick={onToggle} />
      <Button label="Switch to sign up" onClick={onToggle} />
    </div>
  );
}

function Signup({ onToggle }) {
  return (
    <div className="input__wrappers">
      <TextInput placeholder="Enter your name" />
      <EmailInput placeholder="name@example.com" />
      <PasswordInput hasRules={true} />
      <Button type="primary" label="Sign up" onClick={onToggle} />
      <Button label="Switch to login" onClick={onToggle} />
    </div>
  );
}
