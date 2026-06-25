import React, { useEffect, useRef, useState } from 'react'
import './projects.css'
import Bekary from '../../assets/img_projects/Bekary.png'
import BookMark from '../../assets/img_projects/Book-Mark.png'
import Crud from '../../assets/img_projects/CRUD.png'
import Login from '../../assets/img_projects/Login.png'
import MyRecipies from '../../assets/img_projects/My-Recipies.png'
import pharogate from '../../assets/img_projects/pharogate.png'
import portfolioo from '../../assets/img_projects/portfolioo.png'
import quotes from '../../assets/img_projects/quotes.png'
import RaFBoOks from '../../assets/img_projects/RaF-BoOks.png'
import Sadaqah from '../../assets/img_projects/Sadaqah.png'
import Slider from '../../assets/img_projects/slider.png'
import thanya from '../../assets/img_projects/thanya.png'

const portfolioData = [
  {
    id: 1,
    image: pharogate,
    title: 'pharogate',
    disc: 'Pharogate is a high-performance, responsive web platform designed for Ancient Egyptian heritage tourism. Built with React, Vite, and Tailwind CSS, it provides history enthusiasts with a seamless, mobile-first experience to explore tour itineraries, read reviews, manage ticket purchases, and access FAQs through a clean and engaging interface.',
    gitHub: 'https://github.com/HeBaMo7amed/pharogate',
    livedDemo: 'https://pharogate.vercel.app'
  },
  {
    id: 2,
    image: thanya,
    title: 'Thanya',
    disc: 'Thanya is a comprehensive healthcare and emergency response web application featuring a dynamic multi-role architecture tailored for both patients and paramedics. Built with a robust modern frontend stack, the platform integrates secure user authentication, a detailed user dashboard for managing emergency contacts, medical records, and file attachments, alongside real-time tracking of connected IoT medical devices to monitor critical vitals and user location. Key technical implementations include a specialized read-only scanning interface for rapid paramedic access, an advanced SOS emergency management system with live notification tracking, and a fully functional e-commerce store integrated with Stripe for secure checkout simulation.',
    gitHub: 'https://github.com/HeBaMo7amed/THANYA',
    livedDemo: 'https://thanya-silk.vercel.app'
  },
  {
    id: 3,
    image: portfolioo,
    title: 'portfolio',
    disc: 'This classic personal portfolio was developed to establish a professional digital presence and showcase progression as a frontend developer. Built utilizing fundamental web technologies including HTML, CSS, and vanilla JavaScript, the application features a structured project showcase and a dedicated skills section. The layout integrates Bootstrap to guarantee a fluid, mobile-responsive experience across all devices, reflecting a solid engineering foundation and a meticulous approach to crafting clean, accessible, and user-centric web interfaces.',
    gitHub: 'https://github.com/HeBaMo7amed/portfolioo',
    livedDemo: 'https://portfolioo-pink-five.vercel.app'
  },
  {
    id: 4,
    image: Sadaqah,
    title: 'Sadaqah Jariyah',
    disc: 'An Islamic web application built with vanilla frontend technologies that integrates a free public API to dynamically fetch Quranic verses and daily Azkar. The core highlight of the project is a custom-built slider component designed to paginate Surat Al-Mulk, effectively replicating the traditional, seamless page-by-page reading experience of a physical Holy Quran mushaf.',
    gitHub: 'https://github.com/HeBaMo7amed/Sadaqah-Jariyah',
    livedDemo: 'https://sadaqah-jariyah-seven.vercel.app'
  },
  {
    id: 5,
    image: MyRecipies,
    title: 'MyRecipies',
    disc: 'This dynamic recipe web application leverages a free public API to fetch detailed culinary inspiration based on real-time user searches. Designed with vanilla HTML, CSS, and JavaScript, the platform automatically populates the interface with a selection of random recipes upon first-time use to spark immediate engagement and discovery, offering a clean, responsive layout for seamless browsing.',
    gitHub: 'https://github.com/HeBaMo7amed/My-Recipies',
    livedDemo: 'https://hebamo7amed.github.io/My-Recipies/'
  },
  {
    id: 6,
    image: Login,
    title: 'Smart Login System',
    disc: 'A robust and visually engaging authentication interface built with vanilla web technologies, featuring seamless page transitions and smooth animations. The system provides a complete login and registration flow, implementing comprehensive client-side form validation to handle various edge cases effectively. By managing successful authentication states and delivering clear user feedback, this project demonstrates a strong understanding of DOM manipulation, secure input handling, and user-centric UI design.',
    gitHub: 'https://github.com/HeBaMo7amed/Smart-Login-System',
    livedDemo: 'https://hebamo7amed.github.io/Smart-Login-System/'
  },
  {
    id: 7,
    image: RaFBoOks,
    title: 'RaFBoOks',
    disc: 'A visually distinct digital library web application built with vanilla frontend technologies. The project focuses on delivering an engaging user interface, highlighted by a unique, nature-inspired color palette modeled after tree tones to create a calming and immersive reading browsing experience. By utilizing HTML, CSS, and JavaScript, the platform provides an intuitive layout for exploring book collections, demonstrating a strong eye for aesthetic web design and foundational DOM manipulation skills.',
    gitHub: 'https://github.com/HeBaMo7amed/RaF-BoOks',
    livedDemo: 'https://hebamo7amed.github.io/RaF-BoOks/'
  },
  {
    id: 8,
    image: Bekary,
    title: 'Bakery',
    disc: 'Bakery is a visually engaging and fully responsive website tailored for a bakery business. Built with semantic HTML5, CSS3, and Bootstrap, it utilizes a fluid grid system and custom media queries to ensure seamless cross-device compatibility. This project highlights a strong foundation in core front-end technologies, delivering a clean, maintainable, and highly accessible user experience.',
    gitHub: 'https://github.com/HeBaMo7amed/Bakery',
    livedDemo: 'https://hebamo7amed.github.io/Bakery/'
  },
  {
    id: 9,
    image: BookMark,
    title: 'BookMark',
    disc: 'A practical web application designed to replicate core browser bookmarking functionalities, enabling users to efficiently save, manage, and retrieve their favorite websites. Built entirely with vanilla HTML, CSS, and JavaScript, the project features a clean, intuitive user interface equipped with a dynamic, real-time search mechanism to filter through saved links instantly. This application highlights a strong command of foundational web technologies, showcasing proficiency in DOM manipulation, form validation, client-side data handling, and the ability to craft seamless, user-centric tools without relying on external frameworks.',
    gitHub: 'https://github.com/HeBaMo7amed/Book-Mark',
    livedDemo: 'https://hebamo7amed.github.io/Book-Mark/'
  },
  {
    id: 10,
    image: Crud,
    title: 'CRUD',
    disc: 'A responsive inventory management system featuring full CRUD (Create, Read, Update, Delete) capabilities built with vanilla web technologies. The application allows users to seamlessly add, modify, view, and remove product entries within a structured data table. A key highlight is the real-time search functionality that instantly filters inventory items by name, demonstrating strong proficiency in JavaScript DOM manipulation and client-side data management.',
    gitHub: 'https://github.com/HeBaMo7amed/CRUD',
    livedDemo: 'https://hebamo7amed.github.io/CRUD/'
  },
]
const Projects = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const scrollTo = (index) => {
    const container = containerRef.current;
    const card = cardRefs.current[index];

    if (!container || !card) return;

    container.scrollTo({
      left:
        card.offsetLeft -
        container.offsetWidth / 2 +
        card.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const getCenterIndex = () => {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();

      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let minDist = Infinity;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;

        const dist = Math.abs(containerCenter - cardCenter);

        if (dist < minDist) {
          minDist = dist;
          closestIndex = i;
        }
      });

      return closestIndex;
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const index = getCenterIndex();
        setActiveIndex(index);
        setOpenIndex(index);
        ticking = false;
      });
    };

    container.addEventListener("scroll", onScroll);

    setActiveIndex(getCenterIndex());

    return () => {
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="projects" id='projects'>
      <div className="top_section">
        <h2>projects</h2>
      </div>

      <div className="container projects_container" ref={containerRef}>
        {portfolioData.map((item, i) => (
          <article
            key={item.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`portfolio_item ${activeIndex === i ? "active" : ""
              } ${openIndex === i ? "show_btns" : ""}`} onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <h3>{item.title}</h3>

            <div className="portfolio_item_image">
              <img src={item.image} alt={item.title} />
              <div className="portfolio_item_btns">
                <a href={item.gitHub} target="_blank" rel="noreferrer" className="btn">
                  GitHub
                </a>
                <a href={item.livedDemo} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </div>

            <p
              className={`desc ${expandedIndex === i ? "open" : ""}`}
            >
              {item.disc}
            </p>

            <span
              className="read_more"
              onClick={() =>
                setExpandedIndex(expandedIndex === i ? null : i)
              }
            >
              {expandedIndex === i ? "show less" : "Read more"}
            </span>

          </article>
        ))}
      </div>

      <div className="scroll_nav">
        {portfolioData.map((_, i) => (
          <span
            key={i}
            className={`nav_line ${activeIndex === i ? "active" : ""}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </section >
  );
};

export default Projects;
