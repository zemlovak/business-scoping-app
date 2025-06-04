export const Toggle = ({onClick, isOn}) => {
  return (
    <div onClick={onClick} className={`relative w-[40px] h-[24px] rounded-xl border-[1px] border-Grey/4 ${isOn ? `bg-Green/5`: `bg-Grey/1`}`}>
      <div className={`transition-all duration-200 absolute w-[16px] h-[16px] rounded-full top-[3px] ${isOn ? "right-[3px] bg-Grey/1" : "left-[3px] bg-Grey/6"} `}>
      <img className={`${isOn ? `absolute w-3 h-3 top-[2px] left-[2px]` : `hidden`}`} src="src\assets\icons\complete-icon.svg" alt="in-scope tick icon" />
      </div>
    </div>
  );
};

export default Toggle;
