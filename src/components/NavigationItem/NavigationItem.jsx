import "./NavigationItem.css";

function NavigationItem({ link, icon, caption, onClick }) {
  return (
    <button onClick={() => onClick(link)} className="nav-links active">
      {icon}
      {caption}
    </button>
  );
}

export default NavigationItem;
