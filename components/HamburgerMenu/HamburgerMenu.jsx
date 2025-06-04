
export const HamburgerMenu = ({children}) => {
  return (
    <>
      <div className="md:hidden flex items-center justify-end gap-4">
       {children}
      </div>
    </>
  );
};

export default HamburgerMenu;
