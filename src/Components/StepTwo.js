import React from "react";
import Input from "@/Components/Input";
const StepTwo = (props) => {
  const { handleNextStep, handleBackStep } = props;
  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
      <div className="bg-white w-[480px] h-[655px] flex flex-col rounded-2xl p-8 justify-between">
        <div className="flex flex-col justify-around h-[450px]">
          <h2 className="text-[26px] text-foreground font-semibold">
            Join Us! 😎
          </h2>
          <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
          <label htmlFor="Email" className="block text-sm font-semibold leading-4 text-[#334155]">Email</label>
          <Input placeholder={"Enter your email"} />
          <label htmlFor="Phone number" className="block text-sm font-semibold leading-4 text-[#334155]">Phone number</label>
          <Input placeholder={"Phone number"} />
          <label htmlFor="Password" className="block text-sm font-semibold leading-4 text-[#334155]">Password</label>
          <Input placeholder={"Enter your password"} />
          <label htmlFor="Confirm password" className="block text-sm font-semibold leading-4 text-[#334155]">Confirm password</label>
          <Input placeholder={"Confirm your password"} />
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
            Continue 2/3
          </button>
        </div>
      </div>
    </div>
  );
};
export default StepTwo;
