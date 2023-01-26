import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Event } from "../../utils/types";

export default function EventCard(item: Event) {
  return (
    <Card sx={{ marginTop: "-40px" }}>
      {/* <CardMedia
        // sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
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
