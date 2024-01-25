const Button = ({ label, iconURL, alt }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg text-white leading-none bg-coral-red border border-coral-red rounded-full">
      {label}

      {iconURL && <img
        src={iconURL}
        alt={alt}
        className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  );
};

export default Button;
