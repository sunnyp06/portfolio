"use client";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import AltruistLogo from "../../../public/altruist.svg";
// import AltruistLogo from "../../../public/bam.png";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoN03Styles } from "../info-n03";

export type AnimatedCardProps = {
  id: string;
};

export default function AnimatedCard({ id }: AnimatedCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const previewCard = (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "20px",
      }}
    >
      <Box sx={{ minWidth: 256 }}>
        <Box
          sx={{
            px: 3,
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              my: 1,
              width: 80,
              height: "auto",
            }}
          >
            <Image
              src={AltruistLogo}
              alt="Altruist logo"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: 14,
              color: "grey.500",
              letterSpacing: "1px",
            }}
          >
            7 minutes
          </Typography>
        </Box>
        <Box
          component="hr"
          sx={{
            mt: 0,
            backgroundColor: "grey.200",
            mb: 1,
          }}
        />
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Info useStyles={getInfoN03Styles}>
          <InfoEyebrow>Altruist Corp</InfoEyebrow>
          <InfoTitle>React</InfoTitle>
          <InfoSubtitle>
            A JavaScript library for building user interfaces. Build
            encapsulated components that manage their own state, then compose
            them to make complex UIs.
          </InfoSubtitle>
        </Info>
      </CardContent>
    </Card>
  );

  const modalCard = (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "20px",
      }}
    >
      <Box sx={{ minWidth: 256 }}>
        <Box
          sx={{
            px: 3,
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              my: 1,
              width: 80,
              height: "auto",
            }}
          >
            <Image
              src={AltruistLogo}
              alt="Altruist logo"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          {/* <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: 14,
              color: "grey.500",
              letterSpacing: "1px",
            }}
          >
            &times;
          </Typography> */}
          <Button
            onClick={handleClose}
            sx={{ borderRadius: "20px", p: 0, minWidth: 0 }}
          >
            <CloseIcon sx={{ m: 1 }} />
          </Button>
        </Box>
        <Box
          component="hr"
          sx={{
            mt: 0,
            backgroundColor: "grey.200",
            mb: 1,
          }}
        />
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Info useStyles={getInfoN03Styles}>
          <InfoEyebrow>Altruist Corp</InfoEyebrow>
          <InfoTitle>React</InfoTitle>
          <InfoSubtitle>
            A JavaScript library for building user interfaces. Build
            encapsulated components that manage their own state, then compose
            them to make complex UIs.
          </InfoSubtitle>
        </Info>
      </CardContent>
    </Card>
  );

  return (
    <>
      <motion.div layoutId={`expandable-card-${id}`}>
        <CardActionArea
          sx={{
            borderRadius: "20px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            // transition: "0.3s",
            // "&:hover": {

            // },
            transition: "0.2s",
            "&:hover": {
              transform: "scale(1.08)",
              boxShadow: `0 6px 12px 0 rgba(0,0,0,0.3)`,
            },
          }}
          onClick={handleOpen}
        >
          {previewCard}
        </CardActionArea>
      </motion.div>

      <Modal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence mode="sync">
          {isOpen && (
            <motion.div
              layoutId={`expandable-card-${id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                // top: "50%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
                overflow: "auto",
                backgroundColor: "white",
                borderRadius: "20px",
              }}
            >
              {modalCard}
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}
