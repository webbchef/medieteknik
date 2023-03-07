import {
  Typography,
  Modal,
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/constants";
import { Styrare } from "../../utils/types";
import CloseIcon from "@mui/icons-material/Close";

/** STYLE */
const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "50%",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflow: "scroll",
};

interface InputProps {
  open: boolean;
  handleClose: () => {};
  user: Styrare;
}

/**
 * @param open - modal open or not
 * @param handleClose - close modal
 * @param user - styrare
 * Modal holding information about styrare
 * @returns
 */
export default function PresentationModal(props: InputProps) {
  return (
    <motion.div animate="animate" initial="initial" exit={{ opacity: 0 }}>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardHeader
            title={
              <Typography variant="h3" align="center">
                {props.user.name}
              </Typography>
            }
          />

          <IconButton
            aria-label="Example"
            onClick={props.handleClose}
            sx={closeButtonStyle}
          >
            <CloseIcon color="primary" sx={{ fontSize: 40 }} />
          </IconButton>
          <CardContent sx={{ p: 0 }}>
            <motion.h1 variants={fadeInUp}>{props.user.name}</motion.h1>
          </CardContent>
        </Card>
      </Modal>
    </motion.div>
  );
}
