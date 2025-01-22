import React from "react";
import Input from "@/Components/Input";
const StepThree = (props) => {
  const { handleNextStep, handleBackStep } = props;
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
          <label htmlFor="Date of birth" className="block text-sm font-semibold leading-4 text-[#334155]">Date of birth:</label>
          <Input placeholder={"..."} />
        </div>

        <div className="flex flex-row justify-between">
          <button
            className="w-[128px] h-[44px] border rounded-xl flex items-center justify-center"
            onClick={handleBackStep}
          >
            Back
          </button>
          <button
            className="w-[280px] h-[44px] text-white bg-black rounded-xl flex items-center justify-center"
            onClick={handleNextStep}
          >
            Submit 3/3{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default StepThree;
