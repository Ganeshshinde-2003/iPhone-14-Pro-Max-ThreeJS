import "./App.css";
import { GlobalStyle } from "./styles/GlobalStyle";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import ColorsSection from "./sections/ColorsSection";
import CameraSection from "./sections/CameraSection";
import PriceingSection from "./sections/PriceingSection";
import { ColorContextProvider } from "./context/ColorContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorContextProvider>
        <ColorsSection />
        <CameraSection />
        <PriceingSection />
      </ColorContextProvider>
    </>
  );
}

export default App;
