import "./UserFeedback.css";
import { useState } from "react";
import PageContent from "../../PageContent/PageContent.jsx";
import pages from "../../../pages.js";
import { ArrowBigUp } from "lucide-react";
import feedback from "./feedback.js";
import Avatar from "../Avatar/AvatarComponent.jsx";
//import generateRandomFace from "../../../helpers/generateRandomFace.js";
import IconButton from "../../IconButton/IconButton";

function UserFeedbackComponent() {
  const currentPageData = pages.find((page) => page.link === "userFeedback");
  return (
    <>
      <PageContent
        icon={<currentPageData.icon size={32} />}
        title={currentPageData.caption}
        subtitle="This component simulates user feedback with upvoting and downvoting."
      />
      <FeedbackCard data={feedback} />
    </>
  );
}

export default UserFeedbackComponent;

function FeedbackCard({ data }) {
  return (
    <div className="feedback__items">
      {data.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackData={feedbackItem} />
      ))}
    </div>
  );
}

function FeedbackItem({ feedbackData }) {
  const [votes, setVotes] = useState(feedbackData.votes);

  function onVoteChange() {
    setVotes(votes + 1);
  }
  return (
    <>
      <div className="feedback__container">
        <div>
          <Upvote votes={votes} onVote={onVoteChange} />
        </div>
        <div>
          <p>{feedbackData.summary}</p>
          <p>{feedbackData.feedback}</p>
          <div className="feedback__author">
            <Avatar size="xs" intent="photo" photo={feedbackData.image} />
            <p>{feedbackData.author}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Upvote({ votes, onVote }) {
  return (
    <>
      <p>{votes}</p>
      <IconButton
        type="default"
        size="md"
        icon={<ArrowBigUp />}
        onClick={onVote}
      />
    </>
  );
}
