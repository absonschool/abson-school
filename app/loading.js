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
      <Image
        src="/Abson-School-Logo.png"
        alt="Abson School Logo"
        width={120}
        height={120}
        priority
      />

      <h2
  style={{
    color: "white",
    marginTop: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "1px",
  }}
>
  Abson School
</h2>

<p
  style={{
    color: "#94a3b8",
    marginTop: "8px",
  }}
>
  Empowering Future Leaders
</p>

      <div
        style={{
          marginTop: "25px",
          width: "45px",
          height: "45px",
          border: "4px solid rgba(255,255,255,0.2)",
          borderTop: "4px solid white",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
}