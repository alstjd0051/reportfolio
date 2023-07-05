"use client";
import React from "react";
import Header from "./Header";
import {
  AnimatePresence,
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};
const variants: Variants = {
  scaleDown: {
    scale: 0.8,
    y: 100,
    transition: {
      duration: 0.4,
    },
  },
  out: {
    x: "-100%",
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
  in: {
    scale: 0.8,
    y: 100,
    x: "100%",
    transition: {
      duration: 0.4,
    },
  },
  center: {
    x: 0,
    scale: 0.8,
    transformOrigin: "top",
    transition: {
      duration: 0.4,
    },
  },
  scaleUp: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
};

const Layout = ({ children }: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  return (
    <>
      <Header />
      <AnimatePresence initial={false} mode={"popLayout"}>
        <motion.div
          variants={!shouldReduceMotion ? variants : undefined}
          initial="in"
          animate={["center", "scaleUp"]}
          exit={["scaleDown", "out"]}
          key={pathname}
        >
          <main>{children}</main>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
