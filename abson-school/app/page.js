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
          Learn English Language and Basic Computer Skills with modern,
          practical, and career-focused training.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "80px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
            English Training
          </h3>

          <p style={{ color: "#cbd5e1" }}>
            Improve speaking, grammar, listening, and communication skills.
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
            Computer Skills
          </h3>

          <p style={{ color: "#cbd5e1" }}>
            Learn typing, Microsoft Office, internet skills, and digital tools.
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
            Online Registration
          </h3>

          <p style={{ color: "#cbd5e1" }}>
            Register easily online and start learning quickly.
          </p>
        </div>
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

        <form
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Full Name"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <input
            type="email"
            placeholder="Email Address"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <input
            type="text"
            placeholder="Phone Number"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <button
            style={{
              background: "#2563eb",
              color: "white",
              padding: "15px",
              borderRadius: "10px",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Submit Registration
          </button>
        </form>
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