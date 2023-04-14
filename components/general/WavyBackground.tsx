import { Grid, Button, Typography } from "@mui/material";
import styles from "./WavyBackground.module.css";
import { useContext } from "react";
import { MobileStateContext } from "../../contexts/MobileContexts";

interface InputProps {
  bgColor: string;
  children: JSX.Element;
  textColor?: string;
}

export default function WavyBackground(props: InputProps) {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  return (
    <Grid
      container
      sx={[
        {
          position: "relative",
          marginTop: isDesktop ? "69px" : isIpad ? "59px" : "19px",
          marginBottom: isDesktop ? "69px" : isIpad ? "59px" : "19px",
        },
        props.textColor ? { color: props.textColor } : {},
      ]}
    >
      <div
        className={styles.wavyBackgroundTop}
        style={{ bottom: isDesktop ? "-69px" : isIpad ? "-59px" : "-19px" }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          height={isDesktop ? "70px" : isIpad ? "60px" : "20px"}

          // style={
          //   isDesktop
          //     ? { bottom: "-69px" }
          //     : isIpad
          //     ? { bottom: "-59px" }
          //     : { bottom: "-39px" }
          // }
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
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {props.children}
      </Grid>

      <div
        className={styles.wavyBackgroundBottom}
        style={{ top: isDesktop ? "-69px" : isIpad ? "-59px" : "-19px" }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          height={isDesktop ? "70px" : isIpad ? "60px" : "20px"}
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
