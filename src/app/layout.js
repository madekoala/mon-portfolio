import "../../styles/global.css"; 
import ClientLayout from "./components/clientlayout";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mon Portfolio</title>
        <link rel="icon" href="/logoJC-2.png" sizes="any" />
      </head>
      <body>
        <ClientLayout>
          {children}
        <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
