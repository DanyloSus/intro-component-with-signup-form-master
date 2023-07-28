import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevData) => ({
      ...prevData,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, surname } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {
      email: !emailRegex.test(email)
        ? "Please enter a valid email address."
        : "",
      password:
        password.length < 8
          ? "Password must be at least 8 characters long."
          : "",
      name: name.length < 1 ? "Name must be at least 1 characters long." : "",
      surname:
        surname.length < 1
          ? "Last name must be at least 1 characters long."
          : "",
    };

    setFormErrors(errors);
  };

  return (
    <form
      className="flex flex-col w-full h-max bg-white mt-5 p-[40px] pb-[44px] drop-shadow-forPR rounded-xl gap-5 text-dark-blue font-semibold text-center lg:p-[24px]"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        error={formErrors.name}
        name="name"
      />
      <Input
        type="text"
        placeholder="Last Name"
        value={formData.surname}
        onChange={handleChange}
        error={formErrors.surname}
        name="surname"
      />
      <Input
        type="email"
        placeholder="Email Address"
        pattern=".+@gmail\.com"
        title="...@gmail.com"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
        name="email"
      />
      <Input
        type="password"
        placeholder="Password"
        minLength="8"
        value={formData.password}
        onChange={handleChange}
        error={formErrors.password}
        name="password"
      />
      <Input
        type="submit"
        value="CLAIM YOUR FREE TRIAL"
        className="text-white bg-green border-0 drop-shadow-button font-normal cursor-pointer hover:opacity-60 transition-opacity"
      />
      <p className=" text-grayish-blue text-sm lg:text-xs">
        By clicking the button, you are agreeing to our{" "}
        <a href="" className="text-red">
          Terms and vice
        </a>
      </p>
    </form>
  );
};

export default Form;
