'use client';

import { useState } from "react";
import { cn } from "@/lib/utils";

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

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <p
      onClick={handleCopy}
      className={cn(
        "cursor-pointer underline",
        props.align === "center" && "text-center",
        props.align === "left" && "text-left",
        props.align === "right" && "text-right"
      )}
      style={{ color: props.color || "#EC6610" }}
    >
      {copied ? "Kopierad!" : props.text}
    </p>
  );
}
