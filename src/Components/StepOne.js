import React, { useState } from "react";
import Input from "@/Components/Input";

const StepOne = (props) => {
  const { handleNextStep } = props;

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });



  const checkForm = () => {
    if(formError.firstName.length<2) console.log("error");
    
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
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold leading-4 text-[#334155]"
          >
            First name
          </label>
          <Input
            value={formError.firstName}
            onChange={ (e) =>
              setFormError((prev) => ({ ...prev, firstName: e.target.value }))
            }
            placeholder="Your firstname"
          />
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold leading-4 text-[#334155]"
          >
            Last name
          </label>
          <Input
            placeholder="Your lastname"
            value={formError.lastName}
            onChange={(e) =>
              setFormError((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
          <label
            htmlFor="userName"
            className="block text-sm font-semibold leading-4 text-[#334155]"
          >
            Username
          </label>
          <Input
            placeholder="Your username"
            value={formError.userName}
            onChange={(e) =>
              setFormError((prev) => ({ ...prev, userName: e.target.value }))
            }
          />
        </div>

        <button
          className="w-[280px] h-[44px] text-white bg-black rounded-xl flex items-center justify-center"
          onClick={checkForm}
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
};

export default StepOne;
