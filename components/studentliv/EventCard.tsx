import { Event } from "../../utils/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EventCard(item: Event) {
  return (
    <Card>
      <img
        src={`/images/eventPictures/${item.imgPath}.jpg`}
        alt={item.title}
        className="w-full h-[150px] object-cover"
      />
      <CardContent>
        <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
        <p className="text-sm text-muted-foreground">{item.text}</p>
      </CardContent>
    </Card>
  );
}
