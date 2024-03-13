'use client'
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

 const Confetti = () => {
  return <Fireworks autorun={{ speed: 3, duration: 10, delay: 2 }} />;
}

export default Confetti;