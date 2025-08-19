import "./StackedAvatars.css";
// import { useState } from "react";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
// import { ArrowBigUp } from "lucide-react";
import Avatar from "../Avatar/AvatarComponent.jsx";
import generateRandomFace from "../../../helpers/generateRandomFace.js";

function StackedAvatarsComponent() {
  const currentPageData = pages.find((page) => page.link === "stackedAvatars");
  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="Experimenting with some interactions on stacked avatars -> animations, overlap style, hover animations, etc. It includes a control panel to configure the avatars."
      />
      <StackedAvatars />
    </>
  );
}

export default StackedAvatarsComponent;

export function StackedAvatars() {
  return (
    <div className="stacked__container">
      <Avatar
        className="avatar-item"
        size="2xl"
        intent="photo"
        photo={generateRandomFace()}
      />
      <Avatar
        className="avatar-item"
        size="2xl"
        intent="photo"
        photo={generateRandomFace()}
      />
      <Avatar
        className="avatar-item"
        size="2xl"
        intent="photo"
        photo={generateRandomFace()}
      />
      <Avatar
        className="avatar-item"
        size="2xl"
        intent="photo"
        photo={generateRandomFace()}
      />
      <Avatar
        className="avatar-item"
        size="2xl"
        intent="photo"
        photo={generateRandomFace()}
      />
    </div>
  );
}
