import { AiFillCaretDown } from "react-icons/ai";

function LaunchBar() {
  return (
    <div className="flex-row inline-flex pt-3  place-content-center w-full h-12 bg-black">
      <div className="bg-sky-300 px-2 h-5 pt-1/2 text-center font-AzoBold rounded-lg text-blue-700 mr-4 ">
        New
      </div>
      <div className="main-text font-AzoReg text-md text-gray-100 mr-2">
        Beta Launching Soon!
      </div>
      <a className="main-text cursor-pointer font-AzoBold text-md text-blue-300">
        Sign up to Join the waitlist!
      </a>
      <AiFillCaretDown
        className="mx-1 cursor-pointer"
        color="white"
        size={23}
      />
    </div>
  );
}

export default LaunchBar;
