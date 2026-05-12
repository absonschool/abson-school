export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src="/Abson-School-Logo.png"
            alt="Abson School Logo"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "12px",
              background: "white",
              padding: "5px",
            }}
          />

          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
            Abson School
          </h1>
        </div>

        <a
          href="https://wa.me/251911558921"
          target="_blank"
          style={{
            background: "#22c55e",
            padding: "12px 20px",
            borderRadius: "10px",
            color: "white",
            textDecoration: "none",
          }}
        >
          WhatsApp Us
        </a>
      </nav>

      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2
          style={{
            fontSize: "60px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Welcome to Abson School
        </h2>

        <p
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          Learn English Language and Basic Computer Skills with modern and practical training.
        </p>
      </section>

      <section
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "80px",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "30px" }}>
          Register Now
        </h2>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfLFXuzwJoQ0e9qgjrTYQts1Yhje1fPXVOn38CINjWtgVDXpw/viewform?usp=dialog"
          target="_blank"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "15px",
            borderRadius: "10px",
            textDecoration: "none",
            textAlign: "center",
            fontSize: "18px",
            display: "block",
          }}
        >
          Open Registration Form
        </a>
      </section>

      <footer
        style={{
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        <p>Phone: +251911558921</p>
        <p>Email: absonschool@gmail.com</p>
        <p>© 2026 Abson School. All rights reserved.</p>
      </footer>
    </main>
  );
}