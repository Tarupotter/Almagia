import { Aboreto, Cormorant_SC, Cormorant } from "next/font/google";

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
  style: ["normal", "italic"],
});