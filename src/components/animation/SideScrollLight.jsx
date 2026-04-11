import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

export default function ScrollIndicator() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate Scroll Percentage for the Pink Line
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollTop / docHeight;
      setScrollPercent(scrolled);

      // 2. Find Current Active Section
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          // We use -100 to trigger the dot slightly before the section hits the top
          if (window.scrollY >= sectionTop - 100) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-9999 lg:flex lg:fixed lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-10 lg:h-72 lg:flex-col lg:items-center lg:z-50">
      {/* Base Grey Line */}
      <div className="absolute w-0.5 h-full bg-gray-300/20 dark:bg-gray-700">
        {" "}
      </div>

      {/* Pink Filling Line */}
      <div
        className="absolute top-0 w-0.5 bg-vivid-pink z-20 transition-transform duration-100 origin-top"
        style={{ height: "100%", transform: `scaleY(${scrollPercent})` }}
      ></div>

      {/* Dots List */}
      <ul className="h-full flex flex-col justify-between z-30">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 transition-all duration-300 ${
                activeSection === id
                  ? "bg-vivid-pink scale-125 shadow-[0_0_15px_rgba(255,49,173,0.6)]"
                  : "bg-gray-400"
              }`}
              aria-label={`Scroll to ${id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
