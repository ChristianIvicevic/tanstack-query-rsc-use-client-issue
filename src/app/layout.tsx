import { Providers } from "@/app/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          {children}
          <ReactQueryDevtools />
        </Providers>
      </body>
    </html>
  );
}
