import { useState } from "react";
import { Toggle } from "../Toggle/Toggle";

export const Level4BC = () => {
  const [inScope, setInScope] = useState(false);

  const handleScope = (e) => {
    e.stopPropagation();
    setInScope((prev) => !prev);
  };

  return (
    <div className={`transition-all ease-in-out duration-300 rounded-lg pl-12`}>
      <div
        className={`flex justify-between items-center text-Blue/11 shadow-md px-4 py-2 first-mt-0 mt-2 rounded-lg max-h-[70px] py-6 border-[1px] border-Grey/2 hover:bg-Grey/2`}
      >
        <div className="flex justify-start items-center">
          <img
            className="text-Teal/8 fill-current mr-2"
            src="src\assets\icons\chevron-phase-icon.svg"
            alt="phase icon"
          />
          <p>Business Capability</p>
        </div>

        <div className="flex items-center gap-2">
          <Toggle onClick={handleScope} isOn={inScope} />
        </div>
      </div>
    </div>
  );
};

export default Level4BC;
