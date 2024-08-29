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
  modalCard: Omit<ModalCardProps, "handleClose" | "fullScreen">;
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
          <Box component="ul" sx={{ my: 2 }}>
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
  ragResearchArticles: {
    id: "rag-research-articles",
    previewCard: {
      imageSrc: BamLogo,
      imageAlt: "Balyasny Asset Management logo",
      year: "2024",
      eyebrow: "Balyasny Asset Management",
      title: "AI-Powered Research Article Search",
      subtitle:
        "A system for intelligent search and summarization of research articles using Retrieval Augmented Generation and vector-embeddings based search techniques.",
    },
    modalCard: {
      imageSrc: BamLogo,
      imageAlt: "Balyasny Asset Management logo",
      imageHref: "https://www.bamfunds.com/",
      eyebrow: "Balyasny Asset Management",
      title: "AI-Powered Research Article Search",
      Content: () => (
        <Box>
          <Typography variant="body1" paragraph>
            At Balyasny Asset Management, I developed an advanced research
            article query API and UI that combined Retrieval Augmented
            Generation (RAG) with vector-embeddings based search and traditional
            tag-based search. This project significantly improved the efficiency
            of accessing and understanding vast amounts of research data
            available to the firm.
          </Typography>
          <Typography variant="body1" paragraph>
            Key features of the system included:
          </Typography>
          <Box component="ul" sx={{ my: 2 }}>
            <Typography component="li">
              RAG using research articles for summaries and answers to user
              queries, with source citations.
            </Typography>
            <Typography component="li">
              Vector-embeddings based search for highly relevant results.
            </Typography>
            <Typography component="li">
              Traditional tag-based search with a tag expansion algorithm for
              broader and more customizable coverage.
            </Typography>
            <Typography component="li">
              A user-friendly interface displaying AI responses, source
              citations, and search results side-by-side.
            </Typography>
            <Typography component="li">
              Customizable search filters for refining results.
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            The project involved:
          </Typography>
          <Box component="ul" sx={{ my: 2 }}>
            <Typography component="li">
              Implementing RAG using OpenAI&apos;s API for generating
              context-aware article summaries and answering user queries
            </Typography>
            <Typography component="li">
              Extensive prompt engineering to optimize LLM responses, including
              experimenting with various prompts and creating examples of ideal
              responses to ensure correct formatting with accurate citations.
            </Typography>
            <Typography component="li">
              Building a responsive frontend to display results effectively
            </Typography>
            <Typography component="li">
              Developing a Slack bot that used the newly created API for daily
              scheduled summaries of new articles, partitioned by
              market/product, leveraging prompt engineering to generate
              responses in Slack&apos;s Block Kit format for rich formatting.
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            The system significantly improved the research process at Balyasny,
            allowing analysts to quickly find relevant information and gain
            AI-augmented insights from a vast repository of research articles.
            It became an essential tool for informed decision-making across
            various investment teams.
          </Typography>
          <Typography variant="body1" paragraph>
            The date filter feature proved especially useful for getting quick
            summaries of recent developments across a broad range of markets.
            This capability, combined with the daily Slack summaries, enabled
            analysts to stay up-to-date with the latest market trends and
            research findings efficiently.
          </Typography>
          <Typography variant="body1" paragraph>
            [Placeholder for visual mock: An image showcasing the user interface
            with the RAG-generated summary and source citations on one side, and
            vector-embeddings based search results on the other. The mock will
            also highlight the search filters available to users for refining
            their queries.]
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
          <Box component="ul" sx={{ my: 2 }}>
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
