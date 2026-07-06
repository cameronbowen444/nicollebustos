import React, { useEffect, useState } from "react";

import DotGroup from "./scenes/DotGroup";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import About from "./scenes/About";
import MySkills from "./scenes/MySkills";
import Experience from "./scenes/Experience";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import LineGradient from "./components/LineGradient";

const sectionIds = ["home", "about", "skills", "experience", "contact"];

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  /* NAVBAR BACKGROUND */
  useEffect(() => {
    const handleScroll = () => {
      const nextIsTop = window.scrollY < 10;

      setIsTopOfPage((current) =>
        current === nextIsTop ? current : nextIsTop
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ACTIVE SECTION */
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;

        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!mostVisible ||
              entry.intersectionRatio > mostVisible.intersectionRatio)
          ) {
            mostVisible = entry;
          }
        }

        if (mostVisible) {
          const nextPage = mostVisible.target.id;

          setSelectedPage((current) =>
            current === nextPage ? current : nextPage
          );
        }
      },
      {
        threshold: [0.2, 0.5],
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <DotGroup
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Landing setSelectedPage={setSelectedPage} />

      <LineGradient />

      <div className="mx-auto w-5/6">
        <About setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />

      <div className="mx-auto w-5/6">
        <MySkills />
      </div>

      <LineGradient />

      <div className="mx-auto w-5/6">
        <Experience />
      </div>

      <LineGradient />

      <div className="mx-auto w-5/6">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;