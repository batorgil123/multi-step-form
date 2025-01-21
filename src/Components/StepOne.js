import React from "react";

import Input from "@/Components/Input";
const StepOne = (props) => {
  const { handleNextStep, handleBackStep } = props;

  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
      <div className="bg-white w-[480px] h-[655px] flex flex-col rounded-2xl">
        <Input placeholder={"Your first name"} />
        <Input placeholder={"Your last name"}/>
        <Input placeholder={"Your username"}/>
        <button className="w-[280px] h-[44px] text-white bg-black rounded-xl flex items-center justify-center" onClick={handleNextStep}> Continue</button>
      </div>
    </div>
  );
};
export default StepOne;
