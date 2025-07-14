import Tick from "../../assets/icons/Tick";
import Information from "../../assets/icons/Information";
import Caution from "../../assets/icons/Caution";
import Warning from "../../assets/icons/Warning";
import { Shapes, X } from "lucide-react";
import "./Banner.css";
import { useState } from "react";
import IconButton from "../IconButton/IconButton";

// Still to do with this:
// 1. Add custom colours when custom is selected
// 2. Add 2 variants of the text and switch between them

export default function Banner({
  intent = "information",
  isSlim = false,
  icon,
  title,
  isSubtle = false,
  children,
  canDismiss,
  width = "100%",
  alignment = "flex-start",
}) {
  const [isVisible, setIsVisible] = useState(true);
  function handleDismiss() {
    setIsVisible(false);
  }

  const bannerStyle = { width: width, justifySelf: alignment };

  if (intent === "information") {
    icon = <Information />;
  } else if (intent === "caution") {
    icon = <Caution />;
  } else if (intent === "success") {
    icon = <Tick />;
  } else if (intent === "warning") {
    icon = <Warning />;
  } else if (intent === "custom") {
    icon = icon || <Shapes />;
  }

  return (
    <>
      {isVisible && (
        <div
          className={`banner ${isSlim && "banner__slim"} ${isSubtle && "low-emphasis"} banner__container--${intent}`}
          style={bannerStyle}
        >
          <div
            className={`banner__icon banner__icon--${intent === "custom" ? "custom" : intent}`}
          >
            {icon}
          </div>
          <div className="banner__content--container">
            {!isSlim && <div className="banner__header">{title}</div>}
            <div className="banner__content">{children}</div>
          </div>
          {canDismiss && (
            <IconButton
              icon={<X />}
              type="alpha"
              size="sm"
              className="dismiss"
              onClick={handleDismiss}
            />
          )}
        </div>
      )}
    </>
  );
}
