import { Typography } from "@mui/material";
import AltruistLogo from "../../../public/altruist.svg";
import BamLogo from "../../../public/bam.png";
import { ModalCardProps } from "./ModalCard";
import { PreviewCardProps } from "./PreviewCard";

export interface CardConfig {
  id: string;
  previewCard: PreviewCardProps;
  modalCard: Omit<ModalCardProps, "onClose">;
}

export const projectCardConfig: Record<string, CardConfig> = {
  altruist1: {
    id: "portfolio-analytics",
    previewCard: {
      imageSrc: AltruistLogo,
      imageAlt: "Altruist logo",
      year: "2023",
      eyebrow: "Altruist Corp",
      title: "Portfolio Analytics",
      subtitle:
        "A feature to provide clients with insights into asset class breakdowns, regional exposures, and metrics such as performance, yield and risk.",
    },
    modalCard: {
      imageSrc: AltruistLogo,
      imageAlt: "Altruist logo",
      imageHref: "https://altruist.com/",
      eyebrow: "Altruist Corp",
      title: "Portfolio Analytics",
      Content: () => <Typography></Typography>,
    },
  },
  bam: {
    id: "factors",
    previewCard: {
      imageSrc: BamLogo,
      imageAlt: "Balyasny Asset Management logo",
      year: "2024",
      eyebrow: "Balyasny Asset Management",
      title: "Factor Risk & Attribution Model",
      subtitle: "",
    },
    modalCard: {
      imageSrc: BamLogo,
      imageAlt: "Balyasny Asset Management logo",
      imageHref: "https://www.bamfunds.com/",
      eyebrow: "Balyasny Asset Management",
      title: "React Development",
      Content: () => <Typography></Typography>,
    },
  },
};
