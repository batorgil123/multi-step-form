import React from "react";
import Input from "@/Components/Input";
const StepTwo = (props) => {
  const { handleNextStep, handleBackStep } = props;
  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
      <div className="bg-white w-[480px] h-[655px] flex flex-col rounded-2xl">
        <Input placeholder={"Enter your email"} />
        <Input placeholder={"Phone number"} />
        <Input placeholder={"Enter your password"} />
        <Input placeholder={"Confirm your password"} />
        <div className="flex flex-row justify-between">
          <button className="w-[128px] h-[44px] border rounded-xl flex items-center justify-center" onClick={handleBackStep}>Back</button>
          <button className="w-[280px] h-[44px] text-white bg-black rounded-xl flex items-center justify-center" onClick={handleNextStep}> Continue</button>
        </div>
      </div>
    </div>
  );
};
export default StepTwo;
