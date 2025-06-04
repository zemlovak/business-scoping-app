
export const Button = ({text}) => {
    return ( 
        <button  className="md:ml-4 sm:mt-0 cursor-pointer
          transition-underline ease-in-out duration-300 hover:underline underline-offset-[10px]"
          >
            {text}
        </button>
    );
}
 
export default Button;