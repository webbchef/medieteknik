import { Button, Typography } from "@mui/material";
import Link from "next/link";

interface InputProps {
  children: string;
  src: string;
  external?: boolean;
  color?: string;
}
export default function StyledButton(props: InputProps) {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{ m: 3 }}
      component="a"
      LinkComponent={Link}
      href={props.src}
      target={props.external ? "_blank" : ""}
      rel={props.external ? "noreferrer" : ""}
    >
      <Typography
        sx={[
          props.color ? { color: props.color } : { color: "white" },
          { paddingRight: 1, paddingLeft: 1, textAlign: "center" },
        ]}
      >
        {props.children}
      </Typography>
    </Button>
  );
}
