import { Grid, Button, Typography } from "@mui/material";

interface InputProps {
  bgColor: string;
  children: JSX.Element;
  textColor: string;
}

export default function WavyBackground(props: InputProps) {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        color: props.textColor,
        marginTop: "69px",
        marginBottom: "69px",
      }}
    >
      <div className="wavy-background-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
            fill={props.bgColor}
          ></path>
        </svg>
      </div>
      <Grid
        container
        sx={{
          backgroundColor: props.bgColor,
        }}
      >
        {props.children}
      </Grid>

      <div className="wavy-background-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
            fill={props.bgColor}
          ></path>
        </svg>
      </div>
    </Grid>
  );
}