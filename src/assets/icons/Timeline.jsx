const Timeline = ({ size = 16, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0181045 3.72974C0.00616553 3.81813 0 3.90834 0 4V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V4C16 3.90834 15.9938 3.81813 15.9819 3.72974C15.85 2.75299 15.0129 2 14 2H2C0.987087 2 0.150044 2.75299 0.0181045 3.72974ZM1.4 6V14C1.4 14.3314 1.66863 14.6 2 14.6H14C14.3314 14.6 14.6 14.3314 14.6 14V6H1.4Z"
        fill={color}
      />
      <path
        d="M3.5 1C3.5 0.447715 3.94772 0 4.5 0C5.05228 0 5.5 0.447715 5.5 1V2H3.5V1Z"
        fill={color}
      />
      <path
        d="M10.7 1C10.7 0.447715 11.1477 0 11.7 0C12.2522 0 12.7 0.447715 12.7 1V2H10.7V1Z"
        fill={color}
      />
    </svg>
  );
};

export default Timeline;
