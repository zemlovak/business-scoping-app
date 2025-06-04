import { useState } from "react";

export const HamburgerMenuItem = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`cursor-pointer`} onClick={handleOpen}>
      <img
        className={`mr-2`}
        src={`${isOpen ? `src/assets/icons/decline-icon.svg` : `src/assets/icons/menu2-icon.svg`}`}
        alt={`${isOpen ? `close menu icon` : `open menu icon`}`}
      />
      <div
        className={`${
          isOpen
            ? `transition-h ease-in-out duration-[.1s] flex flex-col justify-evenly items-center px-2 py-2 gap-2 min-h-[70px] min-w-[120px]
        bg-Neutral/White border-[1px] border-Grey/2 rounded-lg shadow-md absolute
        top-[45px] right-[20px] z-20`
            : `h-0`
        }`}
      >
        {isOpen && children}
      </div>
    </div>
  );
};

export default HamburgerMenuItem;
