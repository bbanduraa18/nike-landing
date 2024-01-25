const Button = ({
  label,
  iconURL,
  alt,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red border border-coral-red text-white"
      } ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img src={iconURL} alt={alt} className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
