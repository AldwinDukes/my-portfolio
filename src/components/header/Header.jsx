import { MdOutlineLightMode } from "react-icons/md";
import PrimaryBtn from "../button/PrimaryBtn";

export default function Header() {
  return (
    <>
      <div className="flex justify-between">
        <MdOutlineLightMode size={30} />
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
