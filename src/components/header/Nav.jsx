// components
import PrimaryBtn from "../button/PrimaryBtn";

function Nav() {
  return (
    <>
      <nav className="font-sans flex justify-center flex-col">
        <ul className="flex justify-between items-center flex-col text-xl tracking-wide sm:max-md:block">
          <li className="p-4">HOME</li>
          <li className="p-4">ABOUT</li>
          <li className="p-4">CONTACT</li>
        </ul>

        <div className="flex justify-center items-center mt-2">
          <PrimaryBtn btnName="RESUME" />
        </div>
      </nav>
    </>
  );
}

export default Nav;
