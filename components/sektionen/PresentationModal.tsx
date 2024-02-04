import {
  Typography,
  Modal,
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { Styrare } from "../../utils/types";
import CloseIcon from "@mui/icons-material/Close";
import CopyText from "../general/CopyText";

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
  boxShadow: 24,
  p: 3,
  maxHeight: { xs: "100vh", sm: "80vh" },
  width: { xs: "100%", sm: "auto" },
  minWidth: "300px",
  maxWidth: "90%",
  overflowY: "scroll",
};

interface InputProps {
  open: boolean;
  handleClose: () => void;
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
              <Typography
                variant="h3"
                margin="10px 0"
                fontSize={{ sm: "30px", xs: "24px" }}
                align="center"
              >
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
          <CardContent sx={{ p: 0, textAlign: "center" }}>
            <Typography variant="h4" fontSize={{ sm: "20px", xs: "18px" }}>
              {props.user.responsibility}
            </Typography>
            <CopyText text={props.user.email} align="center" />
            {props.user.email2 && (
              <CopyText text={props.user.email2} align="center" />
            )}
            <br></br>

            <Typography
              fontSize={{ sm: "16px", xs: "14px", whiteSpace: "pre-line" }}
            >
              {props.user.text}
            </Typography>
          </CardContent>
        </Card>
      </Modal>
    </motion.div>
  );
}
