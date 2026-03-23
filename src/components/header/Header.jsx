import { MdOutlineLightMode } from "react-icons/md";
import "../header/header.css";
import PrimaryBtn from "../button/PrimaryBtn";

export default function Header() {
  return (
    <>
      <div className="flex justify-between">
        <MdOutlineLightMode size={30} />
        <nav className="flex justify-center items-center gap-x-4 navFont">
          <ul className="flex tracking-wide">
            <li className="hoverColor px-4 cursor-pointer">HOME</li>
            <li className="hoverColor px-4 cursor-pointer">ABOUT</li>
            <li className="hoverColor px-4 cursor-pointer">CONTACT</li>
          </ul>
          <PrimaryBtn btnName="RESUME" />
        </nav>
      </div>
    </>
  );
}
