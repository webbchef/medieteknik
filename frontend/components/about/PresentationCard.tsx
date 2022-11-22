import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/constants";
import { Styrare } from "../../utils/types";
import amanda from "../../assets/profilePictures/amanda.jpg";
interface InputProps {
  user: Styrare;
  openInfo: () => void;
}
/**
 *
 * @param {user} user - active user
 * @param {() => void} openInfo - opens modal about user
 * @returns
 */
export default function PresentationCard(props: InputProps) {
  console.log(require("../../assets/profilePictures/amanda.jpg").default.src);
  return (
    <Card onClick={props.openInfo} sx={{ cursor: "pointer" }}>
      {props.user.imageName && (
        <CardMedia
          component="img"
          height="300"
          image={
            require(`../../assets/profilePictures/${props.user.imageName}.jpg`)
              .default.src
          }
          alt={props.user.name}
        />
      )}
      <CardHeader title={props.user.name} align="center" />
      <CardContent>
        <Typography align="center">{props.user.email}</Typography>
      </CardContent>
    </Card>
  );
}
