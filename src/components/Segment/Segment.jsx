import "./Segment.css";

export function Segment({ children }) {
  return <div className="segment__container">{children}</div>;
}

export function SegmentOption({ icon, text, active, onClick }) {
  return (
    <div
      className={`segment__option ${active ? "segment__active" : ""}`}
      onClick={onClick}
      role="button"
    >
      {icon && <div className="segment__icon">{icon}</div>}
      <span className="segment__text">{text}</span>
    </div>
  );
}
