import React, { useState, useEffect } from "react";
import Input from "@/Components/Input";

const StepOne = (props) => {
  const { handleNextStep } = props;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  useEffect(() => {
    const savedForm = localStorage.getItem("stepOneForm");
    if (savedForm) setForm(JSON.parse(savedForm));
  }, []);

  useEffect(() => {
    localStorage.setItem("stepOneForm", JSON.stringify(form));
  }, [form]);

  const validateForm = () => {
    let isValid = true;

    setError({
      firstName: "",
      lastName: "",
      userName: "",
    });

    if (!form.firstName) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        firstName: "Enter your first name!",
      }));
    } else if (form.firstName.length < 2) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        firstName: "Your first name must be at least 2 characters!",
      }));
    } else if (!/^[a-zA-Z]+$/.test(form.firstName)) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        firstName: "First name cannot contain special characters or numbers.",
      }));
    }

    if (!form.lastName) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        lastName: "Enter your last name!",
      }));
    } else if (form.lastName.length < 2) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        lastName: "Your last name must be at least 2 characters!",
      }));
    } else if (!/^[a-zA-Z]+$/.test(form.lastName)) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        lastName: "Last name cannot contain special characters or numbers.",
      }));
    }

    if (!form.userName) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        userName: "Enter your username!",
      }));
    } else if (form.userName.length < 2) {
      isValid = false;
      setError((prev) => ({
        ...prev,
        userName: "Your username must be at least 2 characters!",
      }));
    }

    return isValid;
  };

  const checkForm = () => {
    if (validateForm()) {
      handleNextStep();
    }
  };

  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
      <div className="bg-white w-[480px] h-[655px] flex flex-col rounded-2xl p-8 justify-between">
        <div className="flex flex-col justify-around h-[350px]">
          <h2 className="text-[26px] text-foreground font-semibold">
            Join Us! 😎
          </h2>
          <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>

          <label className="block text-sm font-semibold leading-4 text-[#334155]">
            First name
          </label>
          <Input
            value={form.firstName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, firstName: e.target.value }))
            }
            placeholder="Your first name"
          />
          {error.firstName && (
            <p className="text-red-600 w-full">{error.firstName}</p>
          )}

          <label className="block text-sm font-semibold leading-4 text-[#334155]">
            Last name
          </label>
          <Input
            placeholder="Your last name"
            value={form.lastName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
          {error.lastName && (
            <p className="text-red-600 w-full">{error.lastName}</p>
          )}

          <label className="block text-sm font-semibold leading-4 text-[#334155]">
            Username
          </label>
          <Input
            placeholder="Your username"
            value={form.userName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, userName: e.target.value }))
            }
          />
          {error.userName && (
            <p className="text-red-600 w-full">{error.userName}</p>
          )}
        </div>

        <button
          className="w-full h-[44px] text-white bg-black rounded-xl flex items-center justify-center hover:bg-gray-600 hover:shadow-lg transform transition-all duration-[0.3s]"
          onClick={checkForm}
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
};

export default StepOne;
