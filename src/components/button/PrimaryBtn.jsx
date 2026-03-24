export default function PrimaryBtn({ btnName }) {
  return (
    <>
      <button className="text-vivid-pink border border-vivid-pink rounded-md p-2 hover:cursor-pointer">
        {btnName}
      </button>
    </>
  );
}
