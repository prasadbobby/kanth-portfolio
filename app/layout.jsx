import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../app/globals.css";
import CustomLayoutProvider from "./components/CustomLayoutProvider";

const customFont = localFont({
  src: [
    {
      path: "../public/CabinetGrotesk-Regular.otf",
      style: "normal",
    },
    {
      path: "../public/CabinetGrotesk-Medium.otf",
      style: "bold",
    },
  ],
});

const title = "Reshi Kanth - Developer & Designer";
const description =
  "Portfolio website of developer & designer Reshi Kanth. With passion towards development & design enables me to create create super projects.";

export const metadata = {
  title,
  description,
  metadataBase: new URL("https://reshikanth.vercel.app"),
  keywords: [
    "reshi",
    "kanth",
    "creative developer",
    "designer",
    "reshikanth",
  ],
  openGraph: {
    title: title,
    images: [
      {
        url: "/profile_pic.jpg",
        width: 800,
        height: 600,
      },
    ],
    description,
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  colorScheme: "light",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={customFont.className}>
      <body suppressHydrationWarning={true}>
        <CustomLayoutProvider>{children}</CustomLayoutProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
