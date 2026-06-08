"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const [showTop, setShowTop] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [currentTestimonial, setCurrentTestimonial] =
    useState(0);
const testimonials = [
    {
      name: "Hlina",
      text: "Abson School changed my confidence in English speaking.",
    },
    {
      name: "Fikir",
      text: "The computer training helped me get a job opportunity.",
    },
    {
      name: "Eamon",
      text: "Very supportive teacher and practical lessons.",
    },
  {
    name: "Abel",
    text: "Excellent English classes and supportive teachers.",
  },
  {
    name: "Mahi",
    text: "I improved my computer skills very quickly.",
  },
  {
    name: "Sara",
    text: "The learning environment is amazing.",
  },
  {
    name: "Daniel",
    text: "Best training center I have attended.",
  },
  {
    name: "Helen",
    text: "Very professional instructors and practical lessons.",
  },
];
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1
          ? 0
          : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const teachers = [
    {
      name: "Main Teacher Teddy Abbey",
      role: "English Instructor",
      image: "/image/teachers/teacher-1.jpg",
    },
    {
      name: "Main Teacher 2 Teddy Abbey",
      role: "Computer Skills Trainer",
      image: "/image/teachers/teacher-2.jpg",
    },
    {
      name: "Assistant Teacher Teddy Abbey",
      role: "Communication Coach",
      image: "/image/teachers/teacher-3.jpg",
    },
  ];

  
  const bg = darkMode ? "#0f172a" : "#f8fafc";
  const card = darkMode ? "#1e293b" : "#ffffff";
  const text = darkMode ? "white" : "#0f172a";
  const subText = darkMode ? "#cbd5e1" : "#475569";

  return (
    <main
  style={{
    background: darkMode ? "#0f172a" : "#f8fafc",
    color: text,
    fontFamily: "Arial",
    transition: "0.4s",
    scrollBehavior: "smooth",
    minHeight: "100vh",
  }}
>
      {/* FLOATING WHATSAPP */}
      <motion.a
  whileHover={{
    scale: 1.12,
    rotate: 5,
  }}
  whileTap={{
    scale: 0.9,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
  href="https://wa.me/251911558921"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "25px",
    left: "25px",
    background: "#22c55e",
    color: "#ffffff",
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontSize: "32px",
    zIndex: 2000,
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  }}
>
  💬
</motion.a>
      {/* BACK TO TOP */}
      {showTop && (
      <motion.button
  whileHover={{
    scale: 1.12,
    y: -5,
  }}
  whileTap={{
    scale: 0.9,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#2563eb",
    color: "#ffffff",
    border: "none",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "22px",
    zIndex: 9999,
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  }}
>
  ↑
</motion.button>
      )}

      {/* NAVBAR */}
<nav
  style={{
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: darkMode
      ? "rgba(15,23,42,0.9)"
      : "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #334155",
    padding: "15px 20px",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    {/* LOGO */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Image
  src="/Abson-School-Logo.png"
  alt="Logo"
  width={55}
  height={55}
  style={{
    borderRadius: "12px",
    background: "white",
    padding: "5px",
  }}
/>

      <h1
        style={{
          fontSize: "24px",
        }}
      >
        Abson School
      </h1>
    </div>

    {/* DESKTOP MENU */}
    <div
      className="desktop-menu"
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
     {[
  ["Home", "#home"],
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Courses", "#courses"],
  ["Teachers", "#teachers"],
  ["Contact", "#contact"],
].map(([name, link], index) => (
  <motion.a
    key={index}
    href={link}
    whileHover={{
      scale: 1.08,
      color: "#60a5fa",
    }}
    whileTap={{
      scale: 0.95,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
    }}
    style={{
      color: text,
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    {name}
  </motion.a>
))}

<motion.button
  whileHover={{
    scale: 1.08,
    y: -2,
  }}
  whileTap={{
    scale: 0.95,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
  onClick={() => setDarkMode(!darkMode)}
  style={{
    background: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(37,99,235,0.3)",
  }}
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</motion.button>
    </div>

    {/* MOBILE BUTTON */}
<motion.button
  whileHover={{
    scale: 1.15,
    rotate: 8,
  }}
  whileTap={{
    scale: 0.9,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
  onClick={() => setMenuOpen(!menuOpen)}
  style={{
    background: "transparent",
    border: "none",
    color: text,
    fontSize: "32px",
    cursor: "pointer",
    display: "none",
  }}
  className="mobile-button"
>
  ☰
</motion.button>
</div>

 {/* MOBILE MENU */}
{menuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.35 }}
    style={{
      position: "absolute",
      top: "90px",
      left: 0,
      width: "100%",
      background: darkMode
        ? "rgba(15,23,42,0.98)"
        : "rgba(255,255,255,0.98)",
      backdropFilter: "blur(12px)",
      padding: "30px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      zIndex: 999,
      borderBottom: darkMode
        ? "1px solid #334155"
        : "1px solid #cbd5e1",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    }}
    className="mobile-menu"
  >
    {[
      ["Home", "#home"],
      ["About", "#about"],
      ["Programs", "#programs"],
      ["Courses", "#courses"],
      ["Teachers", "#teachers"],
      ["Contact", "#contact"],
    ].map(([name, link], index) => (
      <motion.a
        key={index}
        href={link}
        onClick={() => setMenuOpen(false)}
        whileHover={{
          x: 10,
          color: "#60a5fa",
        }}
        transition={{ duration: 0.2 }}
        style={{
          color: text,
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        {name}
      </motion.a>
    ))}

    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={() => setDarkMode(!darkMode)}
      style={{
        background: "#2563eb",
        color: "#ffffff",
        border: "none",
        padding: "14px",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "17px",
        fontWeight: "bold",
        marginTop: "10px",
      }}
    >
      {darkMode
        ? "☀️ Light Mode"
        : "🌙 Dark Mode"}
    </motion.button>
  </motion.div>
)}
</nav>

      {/* HERO */}
      <section
  id="home"
  style={{
    textAlign: "center",
    padding: "120px 20px",
    maxWidth: "100%",
    margin: "0 auto",

    backgroundImage:
      "linear-gradient(rgba(15,23,42,0.45), rgba(15,23,42,0.45)), url('/image/promotions/background.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
        >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "clamp(42px, 8vw, 72px)",
            lineHeight: 1.2,
            marginBottom: "30px",
          }}
        >
          Learn English & Computer Skills For Your Future With Teddy Abbey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: "22px",
            color: subText,
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          Empowering students with practical education,
          communication skills, confidence and modern technology.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfLFXuzwJoQ0e9qgjrTYQts1Yhje1fPXVOn38CINjWtgVDXpw/viewform?usp=dialog"
          target="_blank"
          style={{
            background: "#2563eb",
            color: "#ffffff",
            padding: "18px 35px",
            borderRadius: "12px",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Register Now
        </motion.a>
      </section>

     {/* ABOUT */}
<motion.section
  id="about"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  style={{
    padding: "80px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
  }}
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{
      textAlign: "center",
      fontSize: "48px",
      marginBottom: "30px",
    }}
  >
    About Abson School
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    viewport={{ once: true }}
    style={{
      textAlign: "center",
      fontSize: "22px",
      lineHeight: 1.8,
      color: subText,
    }}
  >
    Abson School helps students develop practical
    communication, teaching skills, and technology skills
    needed for modern success.
  </motion.p>
</motion.section>
      {/* PROGRAMS */}
      <section
        id="programs"
        style={{
          padding: "100px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "48px",
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
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      scale: 1.05,
      rotate: 1,
    }}
    transition={{
      duration: 0.4,
      delay: index * 0.15,
    }}
    viewport={{ once: true }}
   
style={{
  background: card,
  padding: "40px 20px",
  borderRadius: "20px",
  textAlign: "center",
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
}}
  >
    <h3
      style={{
        fontSize: "24px",
      }}
    >
      {program}
    </h3>
  </motion.div>
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
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {[
      ["500+", "Students"],
      ["1", "Teacher"],
      ["10+", "Programs"],
      ["100%", "Dedication"],
    ].map(([number, label], index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.2,
        }}
        viewport={{ once: true }}
        style={{
          background: "#1e293b",
          padding: "40px 20px",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            color: "#22c55e",
            marginBottom: "10px",
          }}
        >
          {number}
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#cbd5e1",
          }}
        >
          {label}
        </p>
      </motion.div>
    ))}
  </div>
</section>
{/* COURSES */}
<section
  id="courses"
  style={{
    padding: "80px 20px",
    background: card,
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
      <motion.div
        key={index}
        style={{
          background: card,
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "24px" }}>{course}</h3>
      </motion.div>
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
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{
      fontSize: "42px",
      marginBottom: "50px",
      textAlign: "center",
    }}
  >
    Our Graduations
  </motion.h2>

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
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          boxShadow:
            "0 0 35px rgba(96,165,250,0.55)",
        }}
        style={{
          position: "relative",
          width: "100%",
          height: "250px",
          overflow: "hidden",
          borderRadius: "20px",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          transition={{ duration: 0.4 }}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Image
            src={photo}
            alt="Graduation"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
      </motion.div>
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
      <motion.div
        key={index}
        style={{
          background: card,
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "24px" }}>{item}</h3>
      </motion.div>
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

  <motion.a
  whileHover={{
    scale: 1.08,
    y: -4,
    boxShadow: "0 12px 30px rgba(255,255,255,0.35)",
  }}
  whileTap={{
    scale: 0.95,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
  href="https://docs.google.com/forms/d/e/1FAIpQLSfLFXuzwJoQ0e9qgjrTYQts1Yhje1fPXVOn38CINjWtgVDXpw/viewform?usp=dialog"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    background: "white",
    color: "#2563eb",
    padding: "18px 35px",
    borderRadius: "12px",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    display: "inline-block",
  }}
>
  Register Now
</motion.a>
</section>

{/* FOUNDER SECTION */}
<section
  style={{
    marginBottom: "100px",
    background: card,
    borderRadius: "25px",
    padding: "50px",
    maxWidth: "1200px",
    margin: "100px auto",
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
  id="teachers"
  style={{
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  }}
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{
      textAlign: "center",
      fontSize: "48px",
      marginBottom: "50px",
    }}
  >
    Meet Our Teachers
  </motion.h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
    }}
  >
    {teachers.map((teacher, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.2,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -10,
          scale: 1.03,
          boxShadow:
            "0 0 35px rgba(96,165,250,0.5)",
        }}
        style={{
          background: card,
          borderRadius: "20px",
          overflow: "hidden",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
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
          <motion.div
            whileHover={{
              scale: 1.08,
            }}
            transition={{ duration: 0.4 }}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <Image
              src={teacher.image}
              alt={teacher.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </motion.div>
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
              fontSize: "17px",
            }}
          >
            {teacher.role}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* TESTIMONIALS */}
<section
  style={{
    padding: "100px 20px",
    background: card,
    overflow: "hidden",
  }}
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{
      textAlign: "center",
      fontSize: "48px",
      marginBottom: "60px",
    }}
  >
    Student Testimonials
  </motion.h2>

  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1.1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{ once: true }}
            style={{
              background: darkMode
                ? "#1e293b"
                : "#ffffff",
              padding: "35px",
              borderRadius: "20px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.2)",
              minHeight: "230px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#facc15",
                fontSize: "24px",
                marginBottom: "15px",
              }}
            >
              ★★★★★
            </div>

            <p
              style={{
                color: subText,
                lineHeight: "1.8",
                marginBottom: "20px",
                fontSize: "18px",
              }}
            >
              "{item.text}"
            </p>

            <h3
              style={{
                color: text,
                fontSize: "20px",
              }}
            >
              — {item.name}
            </h3>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

    {/* DOTS */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "30px",
      }}
    >
      {testimonials.map((_, index) => (
        <div
          key={index}
          onClick={() =>
            setCurrentTestimonial(index)
          }
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background:
              currentTestimonial === index
                ? "#2563eb"
                : "#94a3b8",
            cursor: "pointer",
            transition: "0.3s",
          }}
        />
      ))}
    </div>

      {/* PAYMENT METHODS */}
<section
  style={{
    padding: "100px 20px",
    background: darkMode ? "#0f172a" : "#f8fafc",
  }}
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{
      textAlign: "center",
      fontSize: "48px",
      marginBottom: "50px",
      color: text,
    }}
  >
    Payment Methods
  </motion.h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      maxWidth: "1000px",
      margin: "0 auto",
    }}
  >
    {[
      "Telebirr",
      "CBE Birr",
      "Bank Transfer",
      "Cash",
    ].map((method, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.05,
          y: -5,
          boxShadow:
            "0 0 25px rgba(37,99,235,0.4)",
        }}
        style={{
          background: card,
          padding: "25px 40px",
          borderRadius: "15px",
          color: text,
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          transition: "0.3s",
        }}
      >
        {method}
      </motion.div>
    ))}
  </div>
</section>

      {/* CONTACT */}
<section
  id="contact"
  style={{
    padding: "100px 20px",
    maxWidth: "800px",
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
    Contact Us
  </h2>

  <form
    action="https://formsubmit.co/absonschool@gmail.com"
    method="POST"
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}
  >
    <input
      type="hidden"
      name="_subject"
      value="New Abson School Message"
    />

    <input
      type="hidden"
      name="_captcha"
      value="false"
    />

    <input
      type="hidden"
      name="_next"
      value="https://abson-school.vercel.app"
    />

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      style={{
        padding: "15px",
        borderRadius: "10px",
        border: "none",
        fontSize: "16px",
      }}
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      style={{
        padding: "15px",
        borderRadius: "10px",
        border: "none",
        fontSize: "16px",
      }}
    />

    <textarea
      name="message"
      placeholder="Your Message"
      rows="6"
      required
      style={{
        padding: "15px",
        borderRadius: "10px",
        border: "none",
        fontSize: "16px",
      }}
    ></textarea>

    <motion.button
  whileHover={{
    scale: 1.06,
    y: -3,
    boxShadow: "0 12px 30px rgba(37,99,235,0.35)",
  }}
  whileTap={{
    scale: 0.95,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
  }}
  type="submit"
  style={{
    background: "#2563eb",
    color: "#ffffff",
    padding: "15px 30px",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  }}
>
  Send Message
</motion.button>
  </form>
</section>
      {/* FOOTER */}
<footer
  style={{
    padding: "60px 20px",
    textAlign: "center",
    background: darkMode ? "#020617" : "#e2e8f0",
    color: subText,
  }}
>
  <h2
    style={{
      fontSize: "32px",
      marginBottom: "20px",
      color: text,
    }}
  >
    Abson School
  </h2>

  <p style={{ marginBottom: "10px" }}>
    Phone: +251911558921
  </p>

  <p style={{ marginBottom: "25px" }}>
    Email: absonschool@gmail.com
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "20px",
    }}
  >
    <motion.a
      whileHover={{
        scale: 1.2,
        y: -5,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      href="https://web.facebook.com/profile.php?id=61557602519495"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/icons/facebook.png"
        alt="Facebook"
        width={28}
        height={28}
        style={{
          transition: "0.3s",
        }}
      />
    </motion.a>

    <motion.a
      whileHover={{
        scale: 1.2,
        y: -5,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      href="https://www.instagram.com/abbey.teddy0623/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/icons/instagram.png"
        alt="Instagram"
        width={28}
        height={28}
        style={{
          transition: "0.3s",
        }}
      />
    </motion.a>

    <motion.a
      whileHover={{
        scale: 1.2,
        y: -5,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      href="https://www.youtube.com/@absonschool0023"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/icons/youtube.png"
        alt="YouTube"
        width={28}
        height={28}
        style={{
          transition: "0.3s",
        }}
      />
    </motion.a>

    <motion.a
      whileHover={{
        scale: 1.2,
        y: -5,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      href="https://www.tiktok.com/@absonschool"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/icons/tiktok.png"
        alt="TikTok"
        width={28}
        height={28}
        style={{
          transition: "0.3s",
        }}
      />
    </motion.a>
  </div>

  <p style={{ marginTop: "25px" }}>
    © 2026 Abson School. All rights reserved.
  </p>
</footer>
    </main>
  );
}