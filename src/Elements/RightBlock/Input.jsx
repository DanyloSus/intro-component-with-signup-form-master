import React from "react";

const Input = ({
  type = "text",
  placeholder = "",
  className = "",
  value = "",
  title = "",
  error = "",
  onChange,
  minLength = 0,
  name = "",
}) => {
  return (
    <div className="w-full text-right">
      <div className="flex relative items-center">
        <input
          type={type}
          className={className + (error && "border-red text-red")}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          minLength={minLength}
          title={title}
        />
        {error && (
          <img
            src="./icon-error.svg"
            alt="icon error"
            className="absolute right-5"
          />
        )}
      </div>
      <span
        className={
          error
            ? "text-red text-sm transition-all relative -top-0 opacity-1"
            : "text-red text-sm transition-all relative -top-3 opacity-0"
        }
      >
        {error}
      </span>
    </div>
  );
};

export default Input;
