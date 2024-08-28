import AltruistLogo from "../../public/altruist.svg";
import BamLogo from "../../public/bam.png";
import { PreviewCardProps } from './PreviewCard';

export interface CardConfig {
  id: string;
  previewCard: PreviewCardProps;
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
        subtitle: "A feature to provide clients with insights into asset class breakdowns, regional exposures, and performance, yield and risk metrics."
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
        subtitle: "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs."
    },
  },
  bam: {
    id: "bam-1",
    previewCard: {
        imageSrc: BamLogo,
        imageAlt: "Balyasny Asset Management logo",
        year: "7 minutes",
        eyebrow: "Balyasny Asset Management",
        title: "React",
        subtitle: "A JavaScript library for building user interfaces. Build encapsulated components that manage their own state, then compose them to make complex UIs."
    },
  }
};

