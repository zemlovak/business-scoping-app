import { HeaderBP } from "../HeaderBP/HeaderBP";
import { CtaButton } from "../Buttons/CtaButton/CtaButton";
import { Button } from "../Buttons/Button/Button";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import HamburgerMenuItem from "../HamburgerMenuItem/HamburgerMenuItem";

export function Navigation() {
  return (
    <>
      <div className="flex relative justify-between items-center min-h-[70px] sm:h-[70px]">
        <HeaderBP bp0={"E2E Business Process"} bArea={"Business Area"} />
        <div className="hidden md:flex gap-2 items-center">
          <CtaButton text={"Open File"} />
          <Button text={"Download"} />
        </div>
        <HamburgerMenu>
          <HamburgerMenuItem>
            <CtaButton text={"Open File"} />
            <Button text={"Download"} />
          </HamburgerMenuItem>
        </HamburgerMenu>
      </div>
    </>
  );
}

export default Navigation;
