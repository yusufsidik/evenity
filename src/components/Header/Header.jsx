import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";

export default function Header() {
  return (
    <header className="md:mx-4">
      <Navbar />
      <Jumbotron />
    </header>
  );
}
