const Unsplash = ({ size = 16, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8408 6.81921H15.4059V14.9021H0.902344V6.81921H5.4716V10.8459H10.8324V6.81921H10.8408ZM10.8408 0.39859H5.46667V4.44495H10.8275V0.399293L10.8408 0.39859Z"
        fill={color}
      />
    </svg>
  );
};

export default Unsplash;
