"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mode, ModeType, variantsList } from "./transition.types";

export default function Transtiton({
  children,
  mode = Mode.Default,
}: {
  children: React.ReactNode;
  mode?: ModeType;
}) {
  return (
    <motion.main
      variants={variantsList[mode]}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  );
}