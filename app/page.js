import Image from "next/image";

export default function Home() {
  const teachers = [
    {
      name: "Main Teacher",
      role: "English Instructor",
      image: "/image/teachers/teacher-1.jpg",
    },
    {
      name: "Main Teacher 2",
      role: "Computer Skills Trainer",
      image: "/image/teachers/teacher-2.jpg",
    },
    {
      name: "Assistant Teacher",
      role: "Communication Coach",
      image: "/image/teachers/teacher-3.jpg",
    },
  ];

  return (
    <main
      style={{
        background: "#0f172a",
    color: "white",
    fontFamily: "Arial",
    scrollBehavior: "smooth",
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
          Abson School provides practical English language and computer
          skills training to help students succeed in academics, work,
          and life.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfLFXuzwJoQ0e9qgjrTYQts1Yhje1fPXVOn38CINjWtgVDXpw/viewform?usp=dialog"
          target="_blank"
          style={{
            background: "#2563eb",
            transition: "0.3s",
            padding: "18px 35px",
            borderRadius: "12px",
            color: "white",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
            transition: "0.3s",
display: "inline-block",
transform: "scale(1)",
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
          Abson School is dedicated to empowering students with practical
          English communication and modern computer skills. Our mission
          is to help learners build confidence, improve career
          opportunities, and prepare for the digital future.
        </p>
      </section>

      {/* PROGRAMS */}
      <section
        style={{
          padding: "100px 20px",
          background: "#0f172a",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "60px",
          }}
        >
          Our Programs
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            "Computer Training",
            "English Language",
            "Leadership Development",
            "Student Mentorship",
          ].map((program, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "40px 20px",
                borderRadius: "20px",
                textAlign: "center",
                transition: "0.3s",
cursor: "pointer",
              }}
            >
              <h3>{program}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          padding: "100px 20px",
          background: "#111827",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            textAlign: "center",
          }}
        >
          <div>
            <h1 style={{ fontSize: "50px", color: "#22c55e" }}>
              500+
            </h1>
            <p>Students</p>
          </div>

          <div>
            <h1 style={{ fontSize: "50px", color: "#22c55e" }}>
              20+
            </h1>
            <p>Teachers</p>
          </div>

          <div>
            <h1 style={{ fontSize: "50px", color: "#22c55e" }}>
              10+
            </h1>
            <p>Programs</p>
          </div>

          <div>
            <h1 style={{ fontSize: "50px", color: "#22c55e" }}>
              100%
            </h1>
            <p>Dedication</p>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section
        style={{
          padding: "80px 20px",
          background: "#1e293b",
          transition: "0.3s",
cursor: "pointer",
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
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            "English Language Training",
            "Base and Spoken English",
            "Basic Computer Skills",
            "Internet & Email Basics",
            "Advanced Computer Courses",
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

      {/* GRADUATION GALLERY */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
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
          Our Graduations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            "/image/graduation/graduation-1.jpg",
            "/image/graduation/graduation-6.jpg",
            "/image/graduation/graduation-3.jpg",
            "/image/graduation/graduation-10.jpg",
          ].map((photo, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                height: "250px",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <Image
                src={photo}
                alt="Graduation"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                loading="eager"
                style={{
                  objectFit: "cover",
                  transition: "0.4s",
                }}
              />
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
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
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
                transition: "0.3s",
cursor: "pointer",
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
          transition: "0.3s",
          display: "inline-block",
          transform: "scale(1)",
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

      {/* FOUNDER SECTION */}
      <section
        style={{
          marginBottom: "100px",
          background: "#1e293b",
          borderRadius: "25px",
          padding: "50px",
          maxWidth: "1200px",
          margin: "100px auto",
          transition: "0.3s",
cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "450px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/image/owner-1.jpg"
              alt="Founder"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: "cover",
                transition: "0.4s",
              }}
            />
          </div>

          <div>
            <h2
              style={{
                fontSize: "48px",
                marginBottom: "20px",
              }}
            >
              Meet “ABBEY” the Mastermind Behind the Founder
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                color: "#cbd5e1",
              }}
            >
              Abson School was founded with a vision to empower
              students through practical English communication and
              modern computer skills training.
            </p>

            <div
              style={{
                marginTop: "30px",
              }}
            >
              <a
                href="https://wa.me/251911558921"
                target="_blank"
                style={{
                  background: "#22c55e",
                  color: "white",
                  padding: "15px 25px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "18px",
                  display: "inline-block",
                }}
              >
                Contact Founder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Meet Our Teachers
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {teachers.map((teacher, index) => (
            <div
              key={index}
              style={{
                background: "#1e293b",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                textAlign: "center",
                transition: "0.3s",
cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    transition: "0.4s",
                  }}
                />
              </div>

              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                >
                  {teacher.name}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                  }}
                >
                  {teacher.role}
                </p>
              </div>
            </div>
          ))}
        </div>
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