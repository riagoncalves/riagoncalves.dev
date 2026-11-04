import { Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";

export const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-orbitron',
});

export const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
});

export const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-share-tech-mono',
});

// Font CSS variables for <body>; globals.css maps them to font-sans/display/mono.
export const fontVariables = `${rajdhani.variable} ${orbitron.variable} ${shareTechMono.variable}`;
