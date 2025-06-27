import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import Avatar from "./AvatarComponent.jsx";
import { useState } from "react";
import generateRandomFace from "../../../helpers/generateRandomFace.js";

export function Avatars() {
  const currentPageData = pages.find((page) => page.link === "avatar");
  const [initials, setInitials] = useState("AB");
  const [value, setValue] = useState("");

  function getInitials(fullName) {
    if (!fullName.trim()) return "AB";

    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0];

    const firstInitial = firstName.charAt(0).toUpperCase();

    if (nameParts.length < 2) {
      return firstInitial;
    }

    const lastName = nameParts[nameParts.length - 1];

    const lastNameBeforeHyphen = lastName.split("-")[0];
    const lastInitial = lastNameBeforeHyphen.charAt(0).toUpperCase();

    return firstInitial + lastInitial;
  }

  function handleInitials(e) {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    const inputValue = e.target.value;
    const initials = getInitials(inputValue);

    setInitials(initials);
    setValue(inputValue);
  }

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="Avatar component with different intents, colours, sizes, etc. This also uses state to capture the initials typed in at the bottom. This is the first resuable component I have created."
      />
      <div style={{ display: "flex", gap: "16px", margin: "0 0 40px 0" }}>
        <Avatar intent="initials" initials={initials} size="xl" colour="blue" />
        <Avatar intent="initials" initials={initials} size="xl" colour="cyan" />
        <Avatar
          intent="initials"
          initials={initials}
          size="xl"
          colour="green"
        />
        <Avatar intent="initials" initials={initials} size="xl" colour="red" />
        <Avatar
          intent="initials"
          initials={initials}
          size="xl"
          colour="orange"
        />
        <Avatar
          intent="initials"
          initials={initials}
          size="xl"
          colour="yellow"
        />
        <Avatar
          intent="initials"
          initials={initials}
          size="xl"
          colour="purple"
        />
        <Avatar intent="initials" initials={initials} size="xl" colour="pink" />
        <Avatar intent="initials" initials={initials} size="xl" colour="grey" />
      </div>

      <div style={{ display: "flex", gap: "16px", margin: "0 0 40px 0" }}>
        <Avatar
          intent="initials"
          initials={initials}
          size="2xs"
          colour="blue"
        />
        <Avatar intent="initials" initials={initials} size="xs" colour="cyan" />
        <Avatar
          intent="initials"
          initials={initials}
          size="sm"
          colour="green"
        />
        <Avatar intent="initials" initials={initials} size="md" colour="red" />
        <Avatar
          intent="initials"
          initials={initials}
          size="lg"
          colour="orange"
        />
        <Avatar
          intent="initials"
          initials={initials}
          size="xl"
          colour="yellow"
        />
        <Avatar
          intent="initials"
          initials={initials}
          size="2xl"
          colour="purple"
        />
      </div>

      <div style={{ display: "flex", gap: "16px", margin: "0 0 40px 0" }}>
        <Avatar size="2xs" intent="fallback" />
        <Avatar size="xs" intent="fallback" />
        <Avatar size="sm" intent="fallback" />
        <Avatar size="md" intent="fallback" />
        <Avatar size="lg" intent="fallback" />
        <Avatar size="xl" intent="fallback" />
        <Avatar size="2xl" intent="fallback" />
      </div>
      <div style={{ display: "flex", gap: "16px", margin: "0 0 40px 0" }}>
        <Avatar intent="photo" size="2xl" photo={generateRandomFace()} />
        <Avatar intent="photo" size="2xl" photo={generateRandomFace()} />
        <Avatar intent="photo" size="2xl" photo={generateRandomFace()} />
        <Avatar intent="photo" size="2xl" photo={generateRandomFace()} />
        <Avatar intent="photo" size="2xl" photo={generateRandomFace()} />
        <Avatar intent="photo" size="2xl" photo={generateRandomFace()} />
        <Avatar intent="photo" size="2xl" photo={generateRandomFace()} />
      </div>
      <input
        type="text"
        onChange={handleInitials}
        value={value}
        placeholder="Enter full name..."
      />
    </>
  );
}
