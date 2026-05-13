export default function Home() {
  return (
    <main
      style={{
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #1e293b",
          position: "sticky",
          top: 0,
          background: "#0f172a",
          zIndex: 1000,
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

          <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
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
            fontWeight: "bold",
          }}
        >
          WhatsApp Us
        </a>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            marginBottom: "30px",
            lineHeight: 1.2,
          }}
        >
          Learn English & Computer Skills For Your Future
        </h2>

        <p
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
            marginBottom: "40px",
            lineHeight: 1.7,
          }}
        >
          Abson School provides practical English language and computer skills training to help students succeed in academics, work, and life.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfLFXuzwJoQ0e9qgjrTYQts1Yhje1fPXVOn38CINjWtgVDXpw/viewform?usp=dialog"
          target="_blank"
          style={{
            background: "#2563eb",
            padding: "18px 35px",
            borderRadius: "12px",
            color: "white",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Register Now
        </a>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          About Abson School
        </h2>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          Abson School is dedicated to empowering students with practical English communication and modern computer skills. Our mission is to help learners build confidence, improve career opportunities, and prepare for the digital future.
        </p>
      </section>

      {/* COURSES */}
      <section
        style={{
          padding: "80px 20px",
          background: "#1e293b",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Our Courses
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            "English Language Training",
            "Spoken English",
            "Basic Computer Skills",
            "Internet & Email Basics",
          ].map((course, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "24px" }}>{course}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Why Choose Us
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            "Experienced Instruction",
            "Practical Learning",
            "Friendly Environment",
            "Career-Focused Skills",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "24px" }}>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "#2563eb",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Start Your Learning Journey Today
        </h2>

        <p
          style={{
            fontSize: "22px",
            marginBottom: "40px",
          }}
        >
          Join Abson School and build skills that matter.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfLFXuzwJoQ0e9qgjrTYQts1Yhje1fPXVOn38CINjWtgVDXpw/viewform?usp=dialog"
          target="_blank"
          style={{
            background: "white",
            color: "#2563eb",
            padding: "18px 35px",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Register Now
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "50px 20px",
          textAlign: "center",
          background: "#020617",
          color: "#94a3b8",
        }}
      >
        <p style={{ marginBottom: "10px" }}>
          Phone: +251911558921
        </p>

        <p style={{ marginBottom: "10px" }}>
          Email: absonschool@gmail.com
        </p>

        <p>
          © 2026 Abson School. All rights reserved.
        </p>
      </footer>
    </main>
  );
}