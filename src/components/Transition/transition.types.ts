import { Variants } from "framer-motion";

export const InLeft: Variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export const InTop: Variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export const variantsList = {
  default: InLeft,
  top: InTop,
};
export type ModeType = "default" | "top";
export enum Mode {
    Default = "default",
    Top = "top",
}