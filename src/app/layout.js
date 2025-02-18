import Footer from "../components/footer";
import "../../styles/global.css";
import ClientLayout from "../components/clientlayout";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <title>Mon Portfolio</title>
        <link rel="icon" href="/logoJC-2.png" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
