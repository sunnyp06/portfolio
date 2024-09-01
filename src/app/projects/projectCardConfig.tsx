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
            tag-based search. This project improved the efficiency of accessing
            and understanding vast amounts of research data available to the
            firm.
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
              Prompt engineering to optimize LLM responses, including
              experimenting with various prompts and creating examples of ideal
              responses to ensure correct formatting with accurate citations.
            </Typography>
            <Typography component="li">
              Building a responsive frontend to display results effectively.
            </Typography>
            <Typography component="li">
              Developing a Slack bot that used the newly created API for daily
              scheduled summaries of newly published articles, partitioned by
              market/product, leveraging prompt engineering to generate
              responses in Slack&apos;s Block Kit format for rich formatting.
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            The system improved the daily research process at Balyasny, allowing
            analysts to better manage a deluge of information and quickly find
            relevant information. Users were eager to expand the underlying
            dataset, reflecting the utility of the tool.
          </Typography>
          {/* <Typography variant="body1" paragraph>
            [Placeholder for visual mock: An image showcasing the user interface
            with the RAG-generated summary and source citations on one side, and
            vector-embeddings based search results on the other. The mock will
            also highlight the search filters available to users for refining
            their queries.]
          </Typography> */}
        </Box>
      ),
    },
  },
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
              Researching and configuring the required vendor data feeds (such
              as asset class, sector, regional breakdowns, size and style
              exposures, credit ratings, and performance metrics).
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

  positionLevelPerformance: {
    id: "position-level-performance",
    previewCard: {
      imageSrc: AltruistLogo,
      imageAlt: "Altruist logo",
      year: "2023",
      eyebrow: "Altruist Corp",
      title: "Position Level Performance Attribution",
      subtitle:
        "A feature to provide detailed performance breakdown at the individual position level, enabling advisors to analyze and understand performance drivers.",
    },
    modalCard: {
      imageSrc: AltruistLogo,
      imageAlt: "Altruist logo",
      imageHref: "https://altruist.com/",
      eyebrow: "Altruist Corp",
      title: "Position Level Performance Attribution",
      Content: () => (
        <Box>
          <Typography variant="body1" paragraph>
            As a Software Engineer at Altruist, I spearheaded the development of
            a highly requested position-level performance attribution feature.
            This feature provided financial advisors with detailed insights into
            the performance of individual positions within their clients&apos;
            portfolios.
          </Typography>
          <Typography variant="body1" paragraph>
            Key aspects of the project included:
          </Typography>
          <Box component="ul" sx={{ my: 2 }}>
            <Typography component="li">
              Initiating the project by recognizing its importance and
              advocating for its inclusion in the product roadmap.
            </Typography>
            <Typography component="li">
              Analyzing positions and transactions data across all custodians,
              and defining fault-tolerant algorithms used to compute the
              earnings, time-weighted returns attributions and
              accrual-accounting adjustments.
            </Typography>
            <Typography component="li">
              Designing and implementing a robust ETL procedure to precompute
              daily accrued/actual values and earnings at the position and
              account level.
            </Typography>
            <Typography component="li">
              Creating a RESTful API to serve the precomputed data and calculate
              time-weighted returns and cumulative return attributions
              on-the-fly based on the requested date range.
            </Typography>
            <Typography component="li">
              Implementing comprehensive unit tests to ensure data accuracy and
              system reliability.
            </Typography>
            <Typography component="li">
              Continuing to monitor API latency, failures and user feedback.
            </Typography>
          </Box>
          {/* <Typography variant="body1" paragraph>
            A key challenge was optimizing the feature&apos;s performance.
            Initially, the UI was taking 10-60 seconds to load. After
            investigating the query execution plan, I implemented a
            micro-clustering key to group data by search predicate parameters.
            This optimization reduced loading times to less than 5 seconds,
            significantly enhancing the user experience.
          </Typography> */}
          <Typography variant="body1" paragraph>
            The position-level performance attribution feature marked a
            significant improvement in Altruist&apos;s offering, filling a
            well-known gap and enhancing advisors&apos; ability to analyze and
            understand performance drivers.
          </Typography>
          {/* <Typography variant="body1" paragraph>
            This project showcased my ability to lead complex feature
            development from conception to delivery, balancing technical
            implementation with user needs and business priorities.
          </Typography> */}
          <Typography variant="body1" paragraph display="flex">
            Learn more about Altruist&apos;s Position Level Performance
            Attribution:
            <IconLink
              href="https://blog.altruist.com/news/whats-new-in-august#:~:text=seat%20here.-,Newly%20added%20holdings%2Dlevel%20performance,-Say%20hello%20to"
              icon={LooksOneIcon}
              fontSize={24}
            />
          </Typography>
        </Box>
      ),
    },
  },
  // bam: {
  //   id: "factors",
  //   previewCard: {
  //     imageSrc: BamLogo,
  //     imageAlt: "Balyasny Asset Management logo",
  //     year: "2024",
  //     eyebrow: "Balyasny Asset Management",
  //     title: "Factor Risk & Attribution Model",
  //     subtitle:
  //       "A daily factor model for understanding position risk and performance in commodity futures trading.",
  //   },
  //   modalCard: {
  //     imageSrc: BamLogo,
  //     imageAlt: "Balyasny Asset Management logo",
  //     imageHref: "https://www.bamfunds.com/",
  //     eyebrow: "Balyasny Asset Management",
  //     title: "Factor Risk & Attribution Model",
  //     Content: () => (
  //       <Box>
  //         <Typography variant="body1" paragraph>
  //           At Balyasny Asset Management, I developed a sophisticated daily
  //           factor risk and attribution model for commodity futures trading.
  //           This project was crucial for enhancing the understanding of position
  //           risk, exposure and performance within the firm&apos;s commodities
  //           division.
  //         </Typography>
  //         <Typography variant="body1" paragraph>
  //           Key components of the project included:
  //         </Typography>
  //         <Box component="ul" sx={{ my: 2 }}>
  //           <Typography component="li">
  //             Collaborating with a senior quantitative researcher to refine the
  //             model&apos;s technical specifications
  //           </Typography>
  //           <Typography component="li">
  //             Designing and implementing modular backend logic to handle
  //             complex, multi-tiered calculations
  //           </Typography>
  //           <Typography component="li">
  //             Testing different regression techniques, and selecting one based
  //             on performance and results
  //           </Typography>
  //           <Typography component="li">
  //             Developing and deploying necessary APIs and Airflow DAGs for data
  //             processing and model execution
  //           </Typography>
  //           <Typography component="li">
  //             Developing a flexible portfolio processing system to handle
  //             various instrument types and edge cases
  //           </Typography>
  //           <Typography component="li">
  //             Creating a series of interactive dashboards with detailed grids,
  //             charts, and time series visualizations
  //           </Typography>
  //         </Box>
  //         <Typography variant="body1" paragraph>
  //           The resulting application provided actionable insights through a set
  //           of dashboards that applied the factor model to real portfolios. It
  //           offered detailed analysis of risk and PnL attribution, as well as an
  //           extendable API allowing other teams to integrate the underlying
  //           model into their workflows.
  //         </Typography>
  //         <Typography variant="body1" paragraph>
  //           This project laid the foundation to improve the investment
  //           team&apos;s ability to understand and manage risk, leading to more
  //           informed decision-making and potentially improved trading outcomes.
  //         </Typography>
  //       </Box>
  //     ),
  //   },
  // },
};

// holdings performance
{
  /* */
}
