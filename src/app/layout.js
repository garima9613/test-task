import "./globals.css";
import { ApolloWrapper } from "../lib/apollo-wrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
