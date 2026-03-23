import "../button/PrimaryBtn.css";

export default function PrimaryBtn({ btnName }) {
  return (
    <>
      <button className="text-[textColor] border border-[borderColor] rounded-md p-2 hover:cursor-pointer">
        {btnName}
      </button>
    </>
  );
}
