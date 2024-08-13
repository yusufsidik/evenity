// eslint-disable-next-line react/prop-types
export default function CardSchedule({ src, title, content, date, time }) {
  return (
    <div className="max-w-[370px]">
      <img src={src} className="max-h-[240px] rounded-lg" alt={title} />
      <div className="flex justify-between mt-[1rem]">
        <span className="text-[1rem] text-gray-500 font-inter">{date}</span>
        <span className="text-[1rem] text-gray-500 font-inter">{time}</span>
      </div>
      <div className="mt-[.5rem]">
        <h5 className="text-gray-700 text-2xl font-rubik font-bold">{title}</h5>
        <p className="text-gray-500 text-[1rem] font-inter mt-[.5rem]">
          {content}
        </p>
      </div>
    </div>
  );
}
