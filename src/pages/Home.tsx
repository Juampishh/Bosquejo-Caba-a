import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import { About } from "../components/About/About";
import { Team } from "../components/Team/Team";
import { Footer } from "../components/Footer/Footer";

export function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Layout />
      <div id="about">
        <About />
      </div>
      <Team />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
