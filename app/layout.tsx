import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divine Ifediorah — Product-minded engineer",
  description: "Selected work by Divine Ifediorah.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
