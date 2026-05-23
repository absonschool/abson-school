"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "120px",
          marginBottom: "10px",
        }}
      >
        404
      </motion.h1>

      <h2
        style={{
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          color: "#cbd5e1",
          marginBottom: "30px",
        }}
      >
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        style={{
          background: "#2563eb",
          color: "white",
          padding: "15px 30px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Go Home
      </Link>
    </div>
  );
}