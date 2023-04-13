import { useContext } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Event } from "../../utils/types";
import { MobileStateContext } from "../../contexts/MobileContexts";

export default function EventCard(item: Event) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="150px"
        image={`/images/eventPictures/${item.imgPath}.jpg`}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
