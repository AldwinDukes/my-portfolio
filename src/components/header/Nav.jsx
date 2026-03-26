import PrimaryBtn from "../button/PrimaryBtn";

function Nav() {
  return (
    <>
      <div className="flex justify-between">
        <nav className="flex justify-center items-center gap-x-4 font-sans font-semibold">
          <ul className="flex tracking-wide">
            <li className="px-4 cursor-pointer hover:text-vivid-pink">HOME</li>
            <li className="px-4 cursor-pointer hover:text-vivid-pink">ABOUT</li>
            <li className="px-4 cursor-pointer hover:text-vivid-pink">
              CONTACT
            </li>
          </ul>
          <PrimaryBtn btnName="RESUME" />
        </nav>
      </div>
    </>
  );
}

export default Nav;
