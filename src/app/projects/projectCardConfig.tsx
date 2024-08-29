import IconLink from "@/components/IconLink";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import { Box, Typography } from "@mui/material";
import AltruistLogo from "../../../public/altruist.svg";
import BamLogo from "../../../public/bam.png";
import { ModalCardProps } from "./ModalCard";
import { PreviewCardProps } from "./PreviewCard";
export interface CardConfig {
  id: string;
  previewCard: PreviewCardProps;
  modalCard: Omit<ModalCardProps, "onClose" | "fullScreen">;
}

export const projectCardConfig: Record<string, CardConfig> = {
  portfolioAnalytics: {
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
      Content: () => (
        <Box>
          <Typography variant="body1" paragraph>
            As a Software Engineer at Altruist, I helped develop a comprehensive
            portfolio analytics feature designed to provide financial advisors
            and their clients with insights into the composition and performance
            of their investment portfolios.
          </Typography>
          <Typography variant="body1" paragraph>
            My key contributions to the project included:
          </Typography>
          <Box component="ul" sx={{ mt: 2, mb: 2 }}>
            <Typography component="li">
              Collaborating with the product manager and designer to refine the
              selection and visualization of statistics and metrics.
            </Typography>
            <Typography component="li">
              Researching and configuring the required vendor data feeds for
              asset class, sector, regional breakdowns, size and style
              exposures, credit ratings, and performance metrics.
            </Typography>
            <Typography component="li">
              Helping to design and implement a robust, scale-able data ETL
              pipeline using Airflow DAGs, S3, Snowflake, PostgreSQL, fivetran
              (replication), and dbt, balancing extensibility, cost, and level
              of effort.
            </Typography>
            <Typography component="li">
              Leading the team by developing the backend business logic, within
              a flexible framework to handle analysis on accounts, households,
              benchmarks, and model portfolios, serving as the example for the
              team to replicate.
            </Typography>
            <Typography component="li">
              Creating a centralized performance analytics library to ensure
              consistency across the platform for metrics such as time-weighted
              returns, volatility, Sharpe ratio, capture ratios, max drawdown,
              beta etc.
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            The feature was well-received by clients, filling a known gap with
            an intuitive presentation of critical investment information. It
            enhanced the platform&apos;s value proposition and improved
            decision-making capabilities for financial advisors and their
            clients.
          </Typography>
          <Typography variant="body1" paragraph display="flex">
            Learn more about Altruist&apos;s Portfolio Analytics:
            <IconLink
              href="https://altruist.com/portfolio-reporting/#:~:text=with%20appropriate%20context.-,Portfolio%20analytics,-Visualize%20portfolio%20risk"
              icon={LooksOneIcon}
              fontSize={24}
            />
            <IconLink
              href="https://blog.altruist.com/news/whats-new-in-may#:~:text=Advanced%20Analytics%20upgrades"
              icon={LooksTwoIcon}
              fontSize={24}
            />
          </Typography>
        </Box>
      ),
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
      subtitle:
        "A daily factor model for understanding position risk and performance in commodity futures trading.",
    },
    modalCard: {
      imageSrc: BamLogo,
      imageAlt: "Balyasny Asset Management logo",
      imageHref: "https://www.bamfunds.com/",
      eyebrow: "Balyasny Asset Management",
      title: "Factor Risk & Attribution Model",
      Content: () => (
        <Box>
          <Typography variant="body1" paragraph>
            At Balyasny Asset Management, I developed a sophisticated daily
            factor risk and attribution model for commodity futures trading.
            This project was crucial for enhancing the understanding of position
            risk, exposure and performance within the firm&apos;s commodities
            division.
          </Typography>
          <Typography variant="body1" paragraph>
            Key components of the project included:
          </Typography>
          <Box component="ul" sx={{ mt: 2, mb: 2 }}>
            <Typography component="li">
              Collaborating with a senior quantitative researcher to refine the
              model&apos;s technical specifications
            </Typography>
            <Typography component="li">
              Designing and implementing modular backend logic to handle
              complex, multi-tiered calculations
            </Typography>
            <Typography component="li">
              Testing different regression techniques, and selecting one based
              on performance and results
            </Typography>
            <Typography component="li">
              Developing and deploying necessary APIs and Airflow DAGs for data
              processing and model execution
            </Typography>
            <Typography component="li">
              Developing a flexible portfolio processing system to handle
              various instrument types and edge cases
            </Typography>
            <Typography component="li">
              Creating a series of interactive dashboards with detailed grids,
              charts, and time series visualizations
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            The resulting application provided actionable insights through a set
            of dashboards that applied the factor model to real portfolios. It
            offered detailed analysis of risk and PnL attribution, as well as an
            extendable API allowing other teams to integrate the underlying
            model into their workflows.
          </Typography>
          <Typography variant="body1" paragraph>
            This project laid the foundation to improve the investment
            team&apos;s ability to understand and manage risk, leading to more
            informed decision-making and potentially improved trading outcomes.
          </Typography>
        </Box>
      ),
    },
  },
};

// holdings performance
{
  /* <IconLink
href="https://blog.altruist.com/news/whats-new-in-august#:~:text=seat%20here.-,Newly%20added%20holdings%2Dlevel%20performance,-Say%20hello%20to"
icon={LooksOneIcon}
fontSize={24}
/> */
}
