// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
  return (
    <button className="text-white text-sm md:text-[1.125rem] font-rubik bg-biru-gelap py-3 md:py-[1.125rem] px-5 md:px-[2.5rem] rounded-[1rem] hover:bg-indigo-950">
      {children}
    </button>
  );
}
