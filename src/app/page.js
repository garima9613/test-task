"use client";
// import { ApolloWrapper } from "../lib/apollo-wrapper";
import HomePage from "./home/page";

export default function Home({ children }) {
  return (
    <HomePage />
    // <html lang="en">
    //   <body suppressHydrationWarning={true}>
    //     <ApolloWrapper>{children}</ApolloWrapper>
    //   </body>
    // </html>
    // <ApolloWrapper>
    //   <body>
    //     {children}
    //     <HomePage />
    //   </body>
    // </ApolloWrapper>
  );
}
// export default RootLayout({ children }) {
//   return (
//    <html lang="en">
//       <body suppressHydrationWarning={true}>
//         {children}
//       </body>
//     </html>
//   )
// }
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ApolloWrapper>{children}</ApolloWrapper>
//       </body>
//     </html>
//   );
// }
