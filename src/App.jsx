import Button from "./components/Button";
import CardSchedule from "./components/CardSchedule";
function App() {
  return (
    <>
      <Button>Evenity</Button>
      <CardSchedule
        src="./img/img-schedule-5.png"
        title="Festival Holi Indian"
        content="Color your life with us, lets join the festival now"
        date="Maret 8th 2023"
        time="8 AM to 10 PM"
      />
    </>
  );
}

export default App;
