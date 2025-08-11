import "./Breadcrumb.css";
import { ChevronRight } from "lucide-react";

function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb" aria-label="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="breadcrumb__items">
            {isLast ? (
              <span className="breadcrumb__name">{item.label}</span>
            ) : (
              <a href={item.path} className="breadcrumb__link">
                {item.label}
              </a>
            )}
            {!isLast && (
              <span className="breadcrumb__divider">
                <ChevronRight />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
