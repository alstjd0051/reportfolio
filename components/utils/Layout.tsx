import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.2,
    },
  },
};

const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  return (
    <div className="overflow-hidden">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          variants={variants}
          animate="in"
          initial="out"
          exit={"out"}
          key={asPath}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
