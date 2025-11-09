'use client';

import { motion } from "framer-motion";
import { Styrare } from "../../utils/types";
import { X } from "lucide-react";
import CopyText from "../general/CopyText";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InputProps {
  open: boolean;
  handleClose: () => void;
  user: Styrare;
}

/**
 * @param open - modal open or not
 * @param handleClose - close modal
 * @param user - styrare
 * Modal holding information about styrare
 * @returns
 */
export default function PresentationModal(props: InputProps) {
  return (
    <Dialog open={props.open} onOpenChange={props.handleClose}>
      <DialogContent className="max-h-[100vh] sm:max-h-[80vh] max-w-[90%] overflow-y-auto">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2.5 right-2.5"
          onClick={props.handleClose}
        >
          <X className="h-10 w-10 text-primary" />
        </Button>
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl sm:text-3xl my-2.5">
            {props.user.name}
          </DialogTitle>
        </DialogHeader>
        <div className="p-0 text-center">
          <h4 className="text-lg sm:text-xl mb-2">{props.user.responsibility}</h4>
          <CopyText text={props.user.email} align="center" />
          {props.user.email2 && (
            <CopyText text={props.user.email2} align="center" />
          )}
          <br />
          <p className="text-sm sm:text-base whitespace-pre-line">
            {props.user.text}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
