"use client";
import { CardActionArea, Dialog, useMediaQuery, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type ModalCardProps = {
  fullScreen: boolean;
  handleClose: () => void;
};

export type CardAnimatedToModalProps = {
  id: string;
  PreviewCard: React.FC;
  ModalCard: React.FC<ModalCardProps>;
};

export default function CardAnimatedToModal({
  id,
  PreviewCard,
  ModalCard,
}: CardAnimatedToModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <motion.div layoutId={`expandable-card-${id}`}>
        <CardActionArea
          sx={{
            borderRadius: "20px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            transition: "0.2s",
            "&:hover": {
              transform: "scale(1.04)",
              boxShadow: `0 6px 12px 0 rgba(0,0,0,0.3)`,
            },
          }}
          onClick={handleOpen}
        >
          <PreviewCard />
        </CardActionArea>
      </motion.div>

      <Dialog
        open={isOpen}
        onClose={handleClose}
        fullScreen={fullScreen}
        maxWidth="md"
        fullWidth
        closeAfterTransition
        keepMounted
        PaperProps={{
          sx: {
            ...(!fullScreen && { borderRadius: "20px" }),
          },
        }}
        sx={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence mode="sync">
          {isOpen && (
            <motion.div
              id="modal"
              key="modal"
              layoutId={`expandable-card-${id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: "white",
              }}
            >
              <ModalCard fullScreen={fullScreen} handleClose={handleClose} />
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </>
  );
}
