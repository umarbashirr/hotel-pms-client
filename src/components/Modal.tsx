"use client";

import React, { Dispatch, ReactNode, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface ModalProps {
  title: string;
  description: string;
  children: ReactNode;
  open: boolean;
  setOpen: any;
}

const Modal = ({ title, description, children, open, setOpen }: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
