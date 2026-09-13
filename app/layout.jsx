import "./globals.css";

export const metadata = {
  title: "Taegwan Hong — Backend Engineer",
  description:
    "Backend engineer based in Yamaguchi, Japan. Systems, performance, product engineering, and applied AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
