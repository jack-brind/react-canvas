const Ring = ({ size = 16, color = "currentColor" }) => {
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
        d="M14 8C14 11.0376 11.0376 14 8 14C4.96243 14 2 11.0376 2 8C2 4.96243 4.96243 2 8 2C11.0376 2 14 4.96243 14 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
        fill={color}
      />
    </svg>
  );
};

export default Ring;
