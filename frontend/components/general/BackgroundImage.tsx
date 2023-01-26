import eventsContent from "../../content/events.json";
import { Event } from "../../utils/types";
import { Grid, Typography } from "@mui/material";
import gruppbild from "../../assets/gruppbild.jpg";

interface InputProps {
  pageName: string;
  imgSrc: string;
}
export default function BackgroundImage(props: InputProps) {
  const events: Event[] = eventsContent;
  console.log(events);
  return (
    <>
      <Grid
        container
        className="imageContainer"
        sx={{
          // opacity: 0.3,
          height: "70vh",
          position: "relative !important",
          backgroundImage: `url(${props.imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="h1"
          sx={{ textAlign: "center", width: "100%", zIndex: 4 }}
        >
          {props.pageName}
        </Typography>
        <div className="shape">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Grid>
    </>
  );
}
