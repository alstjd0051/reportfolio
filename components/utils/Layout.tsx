import {
  AnimatePresence,
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { SWRConfig } from "swr";
import MainModal from "../commons/modal/MainModal";
import Header from "../commons/layout/Header";

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
  const { asPath } = useRouter();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden effect">
      <AnimatePresence initial={false} mode={"popLayout"}>
        <Header />
        <motion.div
          variants={!shouldReduceMotion ? variants : undefined}
          initial="in"
          animate={["center", "scaleUp"]}
          exit={["scaleDown", "out"]}
          key={asPath}
        >
          <SWRConfig
            value={{
              fetcher: (url: string) =>
                fetch(url, { cache: "no-store" }).then((res) => res.json()),
            }}
          >
            <>{children}</>
          </SWRConfig>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
