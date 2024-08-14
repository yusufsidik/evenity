export default function Jumbotron() {
  return (
    <section className="mx-4 md:mx-0 md:mt-6">
      <div className="bg-jumbotron bg-cover px-6 md:px-10 pb-6 rounded-2xl">
        <p className="text-white pt-[30px] md:pt-[80px] text-sm md:text-[1.125rem] font-light font-rubik">
          Welcome to our ticketing website
        </p>
        <h1 className="text-white text-3xl md:text-[4rem] md:leading-tight font-bold pt-[20px] md:pt-[34px]">
          Where Your <span className="text-ungu">Event</span>
          <br />
          Dreams Come to <br />
          Life
        </h1>
        <p className="text-white pt-[30px] md:pt-[34px] text-xs md:text-[1rem] font-light font-rubik md:max-w-[601px] md:leading-6">
          Not only can you purchase tickets to the hottest events in town, but
          you can also create your own custom tickets with our easy-to-use
          platform. Say goodbye to generic tickets and hello to personalized and
          professional-looking ones that will make your event stand out from the
          rest.
        </p>
      </div>
    </section>
  );
}
