import PageContent from "../../PageContent/PageContent";
import pages from "../../../pages.js";

function ProfileCard() {
  const currentPageData = pages.find((page) => page.link === "profileCard");

  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="Profile cards for different users"
      />
      
    </>
  );
}

export default ProfileCard;
