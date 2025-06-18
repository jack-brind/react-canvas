import "./ProfileCard.css";
import PageContent from "../../PageContent/PageContent";
import pages from "../../../pages.js";
import { users } from "./Users.js";
import { useState } from "react";
import Avatar from "../Avatar/AvatarComponent.jsx";
import {
  generateRandomFaceMale,
  generateRandomFaceFemale,
} from "../../../helpers/generateRandomFace.js";

import {
  IconToggleLeft,
  IconToggleRight,
  IconShieldLockFilled,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";

// Parent component
function UserList() {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          jobTitle={user.jobTitle}
          isAdmin={user.isAdmin}
          gender={user.gender}
          hasImage={user.hasImage}
        />
      ))}
    </div>
  );
}

// Child component
function User({ name, jobTitle, isAdmin, gender, hasImage }) {
  const [admin, setAdmin] = useState(isAdmin);

  function handleAdmin() {
    setAdmin(!admin);
  }

  const initials = name.split(" ");
  const firstInitial = initials[0].charAt(0);
  const lastInitial = initials[1].charAt(0);
  const combniedInitials = firstInitial + lastInitial;

  const colours = ["red", "blue", "purple", "green"];
  const randomColour = Math.floor(Math.random() * colours.length);
  const avatarColour = colours[randomColour];

  return (
    <>
      <div className="profile-card">
        <Avatar
          size="lg"
          intent={hasImage ? "photo" : "initials"}
          photo={
            gender === "Male"
              ? generateRandomFaceMale()
              : generateRandomFaceFemale()
          }
          colour={avatarColour}
          initials={combniedInitials}
        />
        <h3>{name}</h3>
        <p>{jobTitle}</p>
        <button className="button__default" onClick={handleAdmin}>
          <IconStarFilled
            color={admin ? "#FFC700" : "var(--colour-neutral-100)"}
          />
        </button>
      </div>
    </>
  );
}

function ProfileCard() {
  const currentPageData = pages.find((page) => page.link === "profileCard");

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="Profile cards for different users"
      />
      <UserList />
    </>
  );
}

export default ProfileCard;
