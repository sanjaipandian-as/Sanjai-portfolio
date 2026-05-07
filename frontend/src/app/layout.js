import { Geist, Geist_Mono, Bebas_Neue, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Zippy Digital Solutions",
  description: "Zippy Digital Solutions - Transforming ideas into exceptional digital experiences through custom web, app, and AI solutions.",
  icons: {
    icon: "/LOGOico.ico",
  },
};

export default function RootLayout({ children }) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html lang="en">
      <head>
        {isProduction && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('contextmenu', (e) => e.preventDefault());
                document.onkeydown = function(e) {
                  if (e.keyCode == 123) return false;
                  if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0))) return false;
                  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
                };
              `,
            }}
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
