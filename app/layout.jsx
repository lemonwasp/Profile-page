import "./globals.css";
import "./motion.css";
import MotionBoot from "./MotionBoot";

export const metadata = {
  title: "Taegwan Hong — Backend Engineer",
  description:
    "Backend engineer based in Yamaguchi, Japan. Systems, performance, product engineering, and applied AI.",
};

export const viewport = {
  themeColor: "#101010",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionBoot />
        {children}
      </body>
    </html>
  );
}
