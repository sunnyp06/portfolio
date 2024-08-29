"use client";
import { CardActionArea, Modal } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type ModalCardProps = {
  onClose: () => void;
};

export type AnimatedCardProps = {
  id: string;
  PreviewCard: React.FC;
  ModalCard: React.FC<ModalCardProps>;
};

export default function AnimatedCard({
  id,
  PreviewCard,
  ModalCard,
}: AnimatedCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <motion.div layoutId={`expandable-card-${id}`}>
        <CardActionArea
          sx={{
            borderRadius: "20px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            transition: "0.2s",
            "&:hover": {
              transform: "scale(1.08)",
              boxShadow: `0 6px 12px 0 rgba(0,0,0,0.3)`,
            },
          }}
          onClick={handleOpen}
        >
          <PreviewCard />
        </CardActionArea>
      </motion.div>

      <Modal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "100vw",
          overflow: "hidden",
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
                borderRadius: "20px",
              }}
            >
              <ModalCard onClose={handleClose} />
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
}
