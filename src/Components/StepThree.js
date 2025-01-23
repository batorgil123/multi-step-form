import React, { useState, useEffect } from "react";
import Input from "@/Components/Input";
const StepThree = (props) => {
  const { handleNextStep, handleBackStep } = props;
  const [form, setForm] = useState({
    date: "",
  });
  const [error, setError] = useState({
    date: "",
  });
  const checkform = () => {
    let err = false, str = form.date.split("-");
    let year = str[0] * 1;
    if (year < 1900 || year > 2025) {
      err = true;
      setError((prev) => ({ ...prev, date: "Invalid date of birth." }));
    }
    if (!err) handleNextStep();
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
            Date of birth:
          </label>
          <Input
            type="Date"
            value={form.date}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, date: e.target.value }))
            }
          />
          {error.date && <p className="text-red-600 w-full">{error.date}</p>}
          <label className="block text-sm font-semibold leading-4 text-[#334155]">
            Image:
          </label>
          <Input type="file" accept="image/*" />
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
            onClick={checkform}
          >
            Submit 3/3{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default StepThree;
