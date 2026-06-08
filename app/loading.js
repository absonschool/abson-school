"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0f172a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      {/* Animated Logo */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/Abson-School-Logo.png"
          alt="Abson School Logo"
          width={120}
          height={120}
          priority
        />
      </motion.div>

      {/* School Name */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
        }}
        style={{
          color: "white",
          marginTop: "20px",
          fontSize: "28px",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        Abson School
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
        style={{
          color: "#94a3b8",
          marginTop: "8px",
          fontSize: "16px",
        }}
      >
        Empowering Future Leaders
      </motion.p>

      {/* Progress Bar */}
      <div
        style={{
          width: "220px",
          height: "5px",
          background: "#334155",
          borderRadius: "999px",
          overflow: "hidden",
          marginTop: "30px",
        }}
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: "50%",
            height: "100%",
            background: "#3b82f6",
            borderRadius: "999px",
          }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
        style={{
          color: "#cbd5e1",
          marginTop: "18px",
          fontSize: "14px",
        }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
}