import { useRef, useState } from "react";

export const CtaButton = ({ text, onFileSelect }) => {
  return (
    <>
      <button
        type="button"
        className="align-baseline bg-Neutral/White shadow-md border-r-[2px] border-r-Grey/2
        hover:bg-Grey/2 text-Blue/11 text-cyan px-3 py-1 rounded-lg cursor-pointer"
      >
        {/* <img
          className="inline-block mr-2"
          src="src\assets\icons\folder-2-icon.svg"
          alt="open folder icon"
        /> */}
        {text}
      </button>
    </>
  );
};
