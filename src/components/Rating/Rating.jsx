import "./Rating.css";
import { Star, Heart, ThumbsUp } from "lucide-react";
import { useState } from "react";

function Rating({ maxRating = 5, icon = "star" }) {
  const [rating, setRating] = useState(0);

  return (
    <>
      <div
        style={{
          marginTop: "24px",
          display: "flex",
          flexDirection: "row",
          gap: "4px",
        }}
      >
        {Array.from({ length: maxRating }, (_, i) => (
          <StarButton
            key={i}
            onRatingChange={() => setRating(i + 1)}
            full={rating >= i + 1}
            icon={icon}
          />
        ))}
      </div>
      <p>{rating || ""}</p>
    </>
  );
}

const iconStyle = {
  width: "24px",
  height: "24px",
  display: "block",
  cursor: "pointer",
};

function StarButton({ onRatingChange, full, icon }) {
  const ratingIcons = {
    star: Star,
    heart: Heart,
    thumb: ThumbsUp,
  };

  const RatingIcon = ratingIcons[icon] || Star;

  return (
    <RatingIcon
      style={iconStyle}
      role="button"
      color="transparent"
      fill={
        full
          ? icon === "star"
            ? "var(--colour-yellow-50)"
            : "var(--colour-red-50)"
          : "var(--colour-grey-40)"
      }
      onClick={onRatingChange}
    />
  );
}

export default Rating;
