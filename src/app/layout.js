import "../../styles/global.css"; 
import ClientLayout from "./components/Clientlayout.js";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mon Portfolio</title>
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
