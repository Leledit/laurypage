import "../../public/styles/reset.css";
import "../../public/styles/bootstrap.min.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const popins = Poppins({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laury simão",
  description:
    "Descubra uma jornada saudável com a Nutricionista Laury. Transforme sua vida através de orientação nutricional personalizada e conquiste o bem-estar que você merece. Marque uma consulta hoje e inicie sua jornada para uma alimentação equilibrada e um estilo de vida mais saudável.",
  icons: ["./favIcon.ico"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body style={popins.style}>{children}</body>
    </html>
  );
}
