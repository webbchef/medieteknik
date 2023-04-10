import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Event } from "../../utils/types";

export default function EventCard(item: Event) {
  return (
    <Card sx={{ marginTop: "-80px", width: "100%" }}>
      <CardMedia
        component="img"
        height="150"
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
