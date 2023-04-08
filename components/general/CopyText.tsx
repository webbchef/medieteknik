import { Typography } from "@mui/material";
import { MouseEventHandler, useState } from "react";

interface InputProps {
  text: string;
  color?: string;
  align?: string;
}
export default function CopyText(props: InputProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(props.text);
    setCopied(true);

    setInterval(() => {
      setCopied(false);
      console.log("revert");
    }, 3000);
  };

  return (
    <Typography
      onClick={handleCopy}
      sx={[
        { cursor: "pointer" },
        props.color ? { color: props.color } : { color: "blue" },
        props.align ? { textAlign: props.align } : { textAlign: "left" },
      ]}
    >
      {copied ? "Kopierad!" : props.text}
    </Typography>
  );
}
