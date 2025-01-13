import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const startY = useRef(0); // Track starting Y position
  const cubeRef = useRef(null);

  useEffect(() => {
    const navs = document.querySelectorAll(".nav-list li");
    const cube = cubeRef.current;
    const sections = document.querySelectorAll(".section");

    const resumeLists = document.querySelectorAll(".resume-list");
    const resumeBoxs = document.querySelectorAll(".resume-box");

    const portfolioLists = document.querySelectorAll(".portfolio-list");
    const portfolioBoxs = document.querySelectorAll(".portfolio-box");

    // Function to update the active section and cube rotation
    const updateSection = (index) => {
      document.querySelector(".nav-list li.active")?.classList.remove("active");
      navs[index]?.classList.add("active");

      cube.style.transform = `rotateY(${index * -90}deg)`;

      document.querySelector(".section.active")?.classList.remove("active");
      sections[index]?.classList.add("active");

      const array = Array.from(sections);
      const arrSecs = array.slice(1, -1);
      arrSecs.forEach((arrSec) => {
        if (arrSec.classList.contains("active")) {
          sections[4].classList.add("action-contact");
        }
      });
      if (sections[0].classList.contains("active")) {
        sections[4].classList.remove("action-contact");
      }
    };

    // Navbar click functionality
    navs.forEach((nav, index) => {
      nav.addEventListener("click", () => {
        setCurrentIndex(index);
        updateSection(index);
      });
    });

    // Resume section tab-list actions
    resumeLists.forEach((list, index) => {
      list.addEventListener("click", () => {
        document.querySelector(".resume-list.active")?.classList.remove("active");
        list.classList.add("active");

        document.querySelector(".resume-box.active")?.classList.remove("active");
        resumeBoxs[index]?.classList.add("active");
      });
    });

    // Portfolio section tab-list actions
    portfolioLists.forEach((list, index) => {
      list.addEventListener("click", () => {
        document.querySelector(".portfolio-list.active")?.classList.remove("active");
        list.classList.add("active");

        document.querySelector(".portfolio-box.active")?.classList.remove("active");
        portfolioBoxs[index]?.classList.add("active");
      });
    });

    // Visibility for contact section when reloading (cube animation)
    setTimeout(() => {
      sections[4]?.classList.remove("active");
    }, 1500);
  }, []);

  // Handle slider drag start
  const handleDragStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    startY.current = e.touches ? e.touches[0].clientY : e.clientY;
  };

  // Handle slider drag end
  const handleDragEnd = (e) => {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const endY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;

    const diffX = endX - startX.current;
    const diffY = endY - startY.current;

    // Ensure drag is primarily horizontal
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe right
        setCurrentIndex((prev) => {
          const newIndex = Math.max(prev - 1, 0);
          document.querySelectorAll(".nav-list li")[newIndex]?.click();
          return newIndex;
        });
      } else {
        // Swipe left
        setCurrentIndex((prev) => {
          const newIndex = Math.min(prev + 1, 4); // Assuming 4 sections
          document.querySelectorAll(".nav-list li")[newIndex]?.click();
          return newIndex;
        });
      }
    }
  };

  // Update section when index changes
  useEffect(() => {
    const cube = cubeRef.current;
    cube.style.transform = `rotateY(${currentIndex * -90}deg)`;
  }, [currentIndex]);

  return (
    <>
      <Navbar />
      <div
        className="container"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <div className="box" ref={cubeRef}>
          <Home/>
          <About/>
          <Resume />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;








// import React, { useEffect } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Resume from "./components/Resume";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import About from "./components/About";

// const App = () => {
//   useEffect(() => {
//     const navs = document.querySelectorAll(".nav-list li");
//     const cube = document.querySelector(".box");
//     const sections = document.querySelectorAll(".section");

//     const resumeLists = document.querySelectorAll(".resume-list");
//     const resumeBoxs = document.querySelectorAll(".resume-box");

//     const portfolioLists = document.querySelectorAll(".portfolio-list");
//     const portfolioBoxs = document.querySelectorAll(".portfolio-box");

//     // Navbar actions and section actions along with cube rotation
//     navs.forEach((nav, index) => {
//       nav.addEventListener("click", () => {
//         document.querySelector(".nav-list li.active")?.classList.remove("active");
//         nav.classList.add("active");

//         cube.style.transform = `rotateY(${index * -90}deg)`;

//         document.querySelector(".section.active")?.classList.remove("active");
//         sections[index].classList.add("active");

//         const array = Array.from(sections);
//         const arrSecs = array.slice(1, -1);
//         arrSecs.forEach((arrSec) => {
//           if (arrSec.classList.contains("active")) {
//             sections[4].classList.add("action-contact");
//           }
//         });
//         if (sections[0].classList.contains("active")) {
//           sections[4].classList.remove("action-contact");
//         }
//       });
//     });

//     // Resume section tab-list actions
//     resumeLists.forEach((list, index) => {
//       list.addEventListener("click", () => {
//         document.querySelector(".resume-list.active")?.classList.remove("active");
//         list.classList.add("active");

//         document.querySelector(".resume-box.active")?.classList.remove("active");
//         resumeBoxs[index].classList.add("active");
//       });
//     });

//     // Portfolio section tab-list actions
//     portfolioLists.forEach((list, index) => {
//       list.addEventListener("click", () => {
//         document.querySelector(".portfolio-list.active")?.classList.remove("active");
//         list.classList.add("active");

//         document.querySelector(".portfolio-box.active")?.classList.remove("active");
//         portfolioBoxs[index].classList.add("active");
//       });
//     });

//     // Visibility for contact section when reloading (cube animation)
//     setTimeout(() => {
//       sections[4]?.classList.remove("active");
//     }, 1500);
//   }, []);

//   return(
//     <>
//      {/* Navbar */}

//      <Navbar/>
     
//     <div className="container">
//         <div className="box">

//    {/* Home section */}

//         <Home/>

//     {/*  about section */}
            
//       <About/>

//     {/*  resume (experience, skills, education) section */}

//     <Resume/>       

//     {/* portfolio (work, service) section */}

//      <Portfolio/>

//     {/*  contact section */}

//      <Contact/>

// {/*  End of sections  */}


//         </div>
//     </div>

//     </>
//   );
// };

// export default App;


