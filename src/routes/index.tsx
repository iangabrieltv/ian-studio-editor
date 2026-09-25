import { createFileRoute } from "@tanstack/react-router";
import PortfolioApp from "@/components-portfolio/PortfolioApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ian Gabriel — Designer Gráfico & Criador de Conteúdo Visual" },
      {
        name: "description",
        content:
          "Portfólio de Ian Gabriel, Designer Gráfico e Criador de Conteúdo Visual. Identidade visual, social media, sites e campanhas que conectam marcas e pessoas.",
      },
      { property: "og:title", content: "Ian Gabriel — Designer Gráfico & Criador de Conteúdo Visual" },
      {
        property: "og:description",
        content:
          "Portfólio de Ian Gabriel, Designer Gráfico e Criador de Conteúdo Visual. Identidade visual, social media, sites e campanhas que conectam marcas e pessoas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioApp />;
}
