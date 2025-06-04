import { useState } from "react";
import { Toggle } from "../Toggle/Toggle";

export const Level3BA = ({ children }) => {
  const [inScope, setInScope] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScope = (e) => {
    e.stopPropagation();
    setInScope((prev) => !prev);
  };

  const handleExpanded = (e) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };
  
  return (
    <div className={`transition-all ease-in-out duration-300 rounded-lg pl-12`}>
      <div
        className={`flex justify-between items-center text-Blue/11 shadow-md px-4 py-2 first-mt-0 mt-2 rounded-lg max-h-[70px] py-6 border-[1px] border-Grey/2 hover:bg-Grey/2 ${
          isExpanded && `mb-2`
        }`}
      >
        <div className="flex justify-start items-center">
          <img
            className="text-Teal/8 fill-current mr-2"
            src="src\assets\icons\chevron-phase-2-icon.svg"
            alt="phase icon"
          />
          <p>Business Activity</p>
        </div>

        <div className="flex items-center gap-2">
          <Toggle onClick={handleScope} isOn={inScope} />
          <img
            src="src\assets\icons\arrow-down-icon.svg"
            alt="toggle expand icon"
            className={`cursor-pointer inline-block ml-4 ${
              isExpanded ? `rotate-[180deg]` : `rotate-[0deg]`
            } transition-all ease-in-out `}
            onClick={handleExpanded}
          />
        </div>
      </div>
      {isExpanded && children}
    </div>
  );
};
