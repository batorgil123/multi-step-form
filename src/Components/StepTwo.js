import React, { useState, useEffect } from "react";
import Input from "@/Components/Input";
import { split } from "postcss/lib/list";
import { motion } from "framer-motion";
import Header from "@/Components/header"

const StepTwo = (props) => {
  const { handleNextStep, handleBackStep, setError, setForm, form, error } =
    props;

  const Checkform = () => {
    let err = false;
    setError({
      email: "",
      phoneNumber: "",
      password: "",
      password2: "",
    });

    if (form.email.length <= 10) {
      err = true;
      setError((prev) => ({
        ...prev,
        email: "Enter a valid email address.",
      }));
    } else {
      let arr = form.email.split("@");
      console.log(arr);

      if (arr[arr.length - 1] != "gmail.com") {
        err = true;
        setError((prev) => ({
          ...prev,
          email: "Enter a valid email address.",
        }));
      }
    }

    if (form.phoneNumber.length !== 8) {
      err = true;
      setError((prev) => ({
        ...prev,
        phoneNumber: "Phone number must be 8 digits.",
      }));
    }

    if (form.password.length < 6) {
      err = true;
      setError((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters.",
      }));
    }

    if (form.password !== form.password2) {
      err = true;
      setError((prev) => ({
        ...prev,
        password2: "Passwords do not match.",
      }));
    }

    if (!err) handleNextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="bg-white w-[480px] h-[655px] flex flex-col rounded-2xl p-8 justify-between"
    >
      
      <div className="flex flex-col justify-around h-[450px]">
        <Header/>

        <label className="block text-sm font-semibold leading-4 text-[#334155]">
          Email
        </label>
        <Input
          placeholder="Your email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {error.email && <p className="text-red-600 w-full">{error.email}</p>}

        <label className="block text-sm font-semibold leading-4 text-[#334155]">
          Phone number
        </label>
        <Input
          type="text"
          placeholder="Phone number"
          value={form.phoneNumber}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
        />
        {error.phoneNumber && (
          <p className="text-red-600 w-full">{error.phoneNumber}</p>
        )}

        <label className="block text-sm font-semibold leading-4 text-[#334155]">
          Password
        </label>
        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {error.password && (
          <p className="text-red-600 w-full">{error.password}</p>
        )}

        <label className="block text-sm font-semibold leading-4 text-[#334155]">
          Confirm password
        </label>
        <Input
          type="password"
          placeholder="Confirm password"
          value={form.password2}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password2: e.target.value }))
          }
        />
        {error.password2 && (
          <p className="text-red-600 w-full">{error.password2}</p>
        )}
      </div>
      <div className="flex flex-row justify-between">
        <button
          className="w-[128px] h-[44px] border rounded-xl flex items-center justify-center  hover:bg-gray-200 hover:shadow-lg transform transition-all duration-[0.3s]"
          onClick={handleBackStep}
        >
          Back
        </button>
        <button
          className="w-[280px] h-[44px] text-white bg-black rounded-xl flex items-center justify-center  hover:bg-gray-600 hover:shadow-lg transform transition-all duration-[0.3s]"
          onClick={Checkform}
        >
          Continue 2/3
        </button>
      </div>
    </motion.div>
  );
};

export default StepTwo;
