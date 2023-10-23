import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyle";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <HeroSection />
    </>
  );
}

export default App;
