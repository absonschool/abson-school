"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
        background: "#0f172a",
        color: "white",
      }}
    >
      <Image
        src="/Abson-School-Logo.png"
        alt="Abson School Logo"
        width={120}
        height={120}
        priority
        style={{
          marginBottom: "25px",
        }}
      />

      <h1
        style={{
          fontSize: "100px",
          margin: 0,
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: "36px",
          marginBottom: "20px",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          maxWidth: "500px",
          color: "#cbd5e1",
          marginBottom: "30px",
        }}
      >
        The page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link
        href="/"
        style={{
          background: "#2563eb",
          color: "white",
          padding: "14px 28px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Return Home
      </Link>
    </main>
  );
}