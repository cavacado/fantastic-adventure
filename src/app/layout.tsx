import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ga4/third-parties",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          minHeight: "95dvh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
        <footer
          style={{
            marginTop: "auto",
          }}
        >
          <Link href="/">Back to Home</Link>
        </footer>
      </body>
      {process.env.GTM_MEASUREMENT_ID && (
        <GoogleTagManager gtmId={process.env.GTM_MEASUREMENT_ID} />
      )}
    </html>
  );
}
