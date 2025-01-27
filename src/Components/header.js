import React from "react";
import SvgIcon from "@/app/Utils/Svg"
const Header = () => {
  return (
    <div>
        <SvgIcon/>
      <h2 className="text-[26px] text-foreground font-semibold">Join Us! 😎</h2>
      <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};

export default Header;
