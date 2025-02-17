
import {Quicksand} from "next/font/google";
import "./globals.css";


const quickSand = Quicksand( {
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight:['300', '400', '500', '600', '700']
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quickSand.variable}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
