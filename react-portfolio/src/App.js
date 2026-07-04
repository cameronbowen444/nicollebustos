import React, { useEffect, useState } from "react";
import DotGroup from "./scenes/DotGroup";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import About from "./scenes/About";
import MySkills from "./scenes/MySkills";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import Experience from "./scenes/Experience";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const isAboveMediumScreens = useMediaQuery(
    "(min-width: 1060px)"
  );

  /* NAVBAR BACKGROUND ON SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ACTIVE SECTION WHILE SCROLLING */
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "experience",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setSelectedPage(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,
        threshold: [0.15, 0.3, 0.5, 0.7],
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {/* DOT GROUP */}
      {isAboveMediumScreens && (
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}

      {/* HOME */}
      <Landing
        setSelectedPage={setSelectedPage}
      />

      <LineGradient />

      {/* ABOUT */}
      <div className="w-5/6 mx-auto">
        <About
          setSelectedPage={setSelectedPage}
        />
      </div>

      <LineGradient />

      {/* SKILLS */}
      <div className="w-5/6 mx-auto">
        <MySkills />
      </div>

      <LineGradient />

      {/* EXPERIENCE */}
      <div className="w-5/6 mx-auto">
        <Experience />
      </div>

      <LineGradient />

      {/* CONTACT */}
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;