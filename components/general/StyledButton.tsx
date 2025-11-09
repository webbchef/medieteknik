import { Button } from "@/components/ui/button";
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
      variant="default"
      className="m-3 bg-[#EC6610] hover:bg-[#EC6610]/90 px-4"
      asChild
    >
      <Link
        href={props.src}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noreferrer" : undefined}
      >
        <span
          className="px-1 text-center"
          style={{ color: props.color || "white" }}
        >
          {props.children}
        </span>
      </Link>
    </Button>
  );
}
