import "./ProfileCard.css";
import PageContent from "../../PageContent/PageContent";
import pages from "../../../pages.js";
import { users } from "./Users.js";
import Avatar from "../Avatar/AvatarComponent.jsx";
import { useState } from "react";
import { format } from "date-fns";
import { getAbbreviatedYearsAgo } from "../../../helpers/dateFormats";
import Button from "../../Button/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

// Avatar fallback colours
const colours = [
  "blue",
  "cyan",
  "green",
  "red",
  "orange",
  "yellow",
  "purple",
  "pink",
];
// New array with colour property added
const usersWithColours = users.map((user) => ({
  ...user,
  avatarColour: colours[Math.floor(Math.random() * colours.length)],
}));

// Parent component
function UserList({
  data,
  currentIndex,
  onCurrentIndex,
  selectedIndex,
  onSelectedIndex,
}) {
  return (
    <ul
      className="user-list__container"
      onMouseLeave={() => onCurrentIndex(-1)}
    >
      {currentIndex !== -1 && <Highlight highlightIndex={currentIndex} />}
      {data.map((user, index) => (
        <User
          key={user.id}
          data={user}
          index={index}
          currentIndex={currentIndex}
          selectedIndex={selectedIndex}
          onCurrentIndex={onCurrentIndex}
          onSelectedIndex={onSelectedIndex}
        />
      ))}
    </ul>
  );
}

const statusColours = {
  Online: "var(--colour-green-50)",
  Away: "var(--colour-orange-50)",
  Busy: "var(--colour-red-50)",
  "Out of Office": "var(--colour-red-50)",
  Offline: "var(--colour-grey-50)",
};

function UserData({ data, selectedIndex, onNavigateToManager }) {
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const currentUser = data[selectedIndex];
  const name = currentUser.name;
  const initials = name.split(" ");
  const firstInitial = initials[0].charAt(0);
  const lastInitial = initials[1].charAt(0);
  const combinedInitials = firstInitial + lastInitial;

  function handleBioExpand() {
    setIsBioExpanded(() => !isBioExpanded);
  }

  const ellipseStyle = {
    backgroundColor:
      statusColours[currentUser.status] || "var(--colour-blue-50)",
  };

  const trimmedBio = currentUser.bio.slice(0, 100) + "...";

  return (
    <div className="full-user-card">
      <span className="role__chip">{currentUser.role}</span>
      <div className="header__details">
        <Avatar
          size="max"
          intent={currentUser.photo !== "" ? "photo" : "initials"}
          photo={currentUser.photo}
          colour={currentUser.avatarColour}
          initials={combinedInitials}
        />
        <div className="name__title--display">
          <span className="list__name--display">{currentUser.name}</span>
          <p className="list__job-title--display">{currentUser.jobTitle}</p>
          <div className="user__status">
            <div className="status__ellipse" style={ellipseStyle}></div>
            <p style={{ margin: "0px" }}>{currentUser.status}</p>
          </div>
        </div>
      </div>
      <hr className="user__card--divider" />
      <div className="user-card__data">
        <h2 className="user-card__label">Bio</h2>
        <div className="user__bio">
          <p>{isBioExpanded ? currentUser.bio : trimmedBio}</p>
          <Button
            label={`${isBioExpanded ? "Show less" : "Show more"}`}
            onClick={handleBioExpand}
            size="sm"
            type="ghost"
            leadingIcon={isBioExpanded ? <ChevronUp /> : <ChevronDown />}
          />
        </div>
      </div>
      <div className="user-card__data">
        <h2 className="user-card__label">Phone</h2>
        <a className="proto__link" href={`tel:${currentUser.phone}`}>
          {currentUser.phone}
        </a>
      </div>
      <div className="user-card__data">
        <h2 className="user-card__label">Email</h2>
        <a className="proto__link" href={`mailto:${currentUser.email}`}>
          {currentUser.email}
        </a>
      </div>
      <div className="user-card__data">
        <h2 className="user-card__label">Department</h2>
        <p>{currentUser.department}</p>
      </div>
      <div className="user-card__data">
        <h2 className="user-card__label">Skills</h2>
        <p>
          {currentUser.skills.map((skill, index) => (
            <span className="skill__chip" key={index}>
              {skill}
            </span>
          ))}
        </p>
      </div>
      <div className="user-card__data">
        <h2 className="user-card__label">Start date</h2>
        <p>
          {`${format(new Date(currentUser.startDate), "dd MMM yyyy")} (${getAbbreviatedYearsAgo(currentUser.startDate)})`}
        </p>
      </div>
      <div className="user-card__data">
        <h2 className="user-card__label">Manager</h2>
        <p
          onClick={() => onNavigateToManager(currentUser.manager)}
          style={
            currentUser.manager !== null
              ? {
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "var(--text-primary)",
                }
              : {
                  color: "var(--text-muted)",
                }
          }
        >
          {data.find((user) => user.id === currentUser.manager)?.name || "N/A"}
        </p>
      </div>
    </div>
  );
}

// Child component
function User({ data, index, onCurrentIndex, onSelectedIndex, selectedIndex }) {
  // Get initials from user's name to show in the Avatar component
  const name = data.name;
  const initials = name.split(" ");
  const firstInitial = initials[0].charAt(0);
  const lastInitial = initials[1].charAt(0);
  const combinedInitials = firstInitial + lastInitial;

  return (
    <li
      className={`profile-card ${selectedIndex === index ? "selected__user-container" : ""}`}
      onMouseEnter={() => onCurrentIndex(index)}
      onClick={() => onSelectedIndex(index)}
    >
      <Avatar
        size="lg"
        intent={data.photo !== "" ? "photo" : "initials"}
        photo={data.photo}
        colour={data.avatarColour}
        initials={combinedInitials}
      />
      <div className="name__title">
        <span className="list__name">{data.name}</span>
        <p className="list__job-title">{data.jobTitle}</p>
      </div>
    </li>
  );
}

// Fake hover effect / highlight
function Highlight({ highlightIndex }) {
  // Calculate the position based on the list item's height and the index
  const position = 68 * highlightIndex;
  // Move the highlight to the new position
  const highlightPositionStyle = {
    transform: `translateY(${position}px)`,
  };

  return <div className="hover__effect" style={highlightPositionStyle}></div>;
}

function ProfileCard() {
  //Current index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle index update
  function handleCurrentIndex(index) {
    setCurrentIndex(index);
  }
  function handleSelectedIndex(index) {
    setSelectedIndex(index);
  }

  function handleNavigateToManager(managerId) {
    const managerIndex = usersWithColours.findIndex(
      (user) => user.id === managerId,
    );
    if (managerIndex !== -1) {
      setSelectedIndex(managerIndex);
    }
  }

  const currentPageData = pages.find((page) => page.link === "profileCard");

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="Profile cards for different users in an organisation. Uses a transition effect on the list and displays the currently selected user's details with options to navigate to their manager."
      />
      <div className="user-data-container">
        <UserList
          data={usersWithColours}
          currentIndex={currentIndex}
          selectedIndex={selectedIndex}
          onCurrentIndex={handleCurrentIndex}
          onSelectedIndex={handleSelectedIndex}
        />
        <UserData
          data={usersWithColours}
          currentIndex={currentIndex}
          selectedIndex={selectedIndex}
          onCurrentIndex={handleCurrentIndex}
          onSelectedIndex={handleSelectedIndex}
          onNavigateToManager={handleNavigateToManager}
        />
      </div>
    </>
  );
}

export default ProfileCard;
