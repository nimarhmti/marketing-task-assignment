"use client";
import {
  motion,
  useInView,
  HTMLMotionProps,
  TargetAndTransition,
  UseInViewOptions,
} from "framer-motion";
import { useRef } from "react";

interface MotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  viewport?: UseInViewOptions;
}

export default function Motion({
  children,
  className,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  viewport = { once: true },
  ...props
}: MotionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
