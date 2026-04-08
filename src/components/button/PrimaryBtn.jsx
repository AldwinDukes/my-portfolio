export default function PrimaryBtn({ btnName }) {
  return (
    <button
      className="text-vivid-pink border border-vivid-pink rounded-md py-2 px-4 text-base 
    md:py-2 md:px-6 md:text-lg"
    >
      {btnName}
    </button>
  );
}
