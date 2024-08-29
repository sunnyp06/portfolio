import { Typography } from "@mui/material";
import AltruistLogo from "../../public/altruist.svg";
import BamLogo from "../../public/bam.png";
import { ModalCardProps } from "./ModalCard";
import { PreviewCardProps } from "./PreviewCard";

export interface CardConfig {
  id: string;
  previewCard: PreviewCardProps;
  modalCard: Omit<ModalCardProps, "onClose">;
}

export const cardConfig: Record<string, CardConfig> = {
  altruist1: {
    id: "portfolio-analytics",
    previewCard: {
      imageSrc: AltruistLogo,
      imageAlt: "Altruist logo",
      year: "2023",
      eyebrow: "Altruist Corp",
      title: "Portfolio Analytics",
      subtitle:
        "A feature to provide clients with insights into asset class breakdowns, regional exposures, and performance, yield and risk metrics.",
    },
    modalCard: {
      imageSrc: AltruistLogo,
      imageAlt: "Altruist logo",
      imageHref: "https://altruist.com/",
      eyebrow: "Altruist Corp",
      title: "Portfolio Analytics",
      Content: () => (
        <Typography>
          A comprehensive feature that provides clients with in-depth insights
          into their portfolio. This includes detailed breakdowns of asset
          classes, regional exposures, and key metrics such as performance,
          yield, and risk. The analytics tool helps clients make informed
          investment decisions and better understand their financial position.
        </Typography>
      ),
    },
  },
  altruist2: {
    id: "altruist-2",
    previewCard: {
      imageSrc: AltruistLogo,
      imageAlt: "Altruist logo",
      year: "2023",
      eyebrow: "Altruist Corp",
      title: "React",
      subtitle:
        "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
    },
    modalCard: {
      imageSrc: AltruistLogo,
      imageAlt: "Altruist logo",
      imageHref: "https://altruist.com/",
      eyebrow: "Altruist Corp",
      title: "React Development",
      Content: () => (
        <Typography>
          Implemented various React-based features and components for
          Altruist&apos;s platform. This involved creating reusable UI
          components, managing complex state logic, and ensuring optimal
          performance for a smooth user experience. The work contributed to
          building a more interactive and responsive interface for financial
          advisors and their clients.
        </Typography>
      ),
    },
  },
  bam: {
    id: "bam-1",
    previewCard: {
      imageSrc: BamLogo,
      imageAlt: "Balyasny Asset Management logo",
      year: "2024",
      eyebrow: "Balyasny Asset Management",
      title: "React",
      subtitle:
        "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs.",
    },
    modalCard: {
      imageSrc: BamLogo,
      imageAlt: "Balyasny Asset Management logo",
      imageHref: "https://www.bamfunds.com/",
      eyebrow: "Balyasny Asset Management",
      title: "React Development",
      Content: () => (
        <Typography>
          Developed React-based solutions for Balyasny Asset Management&apos;s
          internal tools. This project involved creating sophisticated UI
          components for data visualization, real-time updates, and complex
          financial calculations. The work helped improve the efficiency of
          BAM&apos;s trading and analysis processes, leveraging React&apos;s
          component-based architecture for maintainable and scalable code.
        </Typography>
      ),
    },
  },
};
