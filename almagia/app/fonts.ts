import {
  Aboreto,
  Cormorant_SC,
  Cormorant,
  Alegreya,
  Inter,
  Playfair_Display,
  Lora,
  Lovers_Quarrel,
  Overlock
} from "next/font/google";

export const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
});

export const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400"],
});

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const alegreya = Alegreya({
  subsets: ["latin"],
  style: ["italic"],
});

export const inter = Inter({
  subsets: ["latin"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
});

export const lora = Lora({ 
  subsets: ["latin"] 
});

export const lovers = Lovers_Quarrel({
  subsets: ["latin"],
  weight: "400",
});

export const overlock = Overlock({
  subsets: ["latin"],
  weight: "400",
});
