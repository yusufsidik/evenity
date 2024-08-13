// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
  return (
    <button className="text-white text-[1.125rem] font-rubik bg-biru-gelap py-[1.125rem] px-[2.5rem] rounded-[1rem] hover:bg-indigo-950">
      {children}
    </button>
  );
}
