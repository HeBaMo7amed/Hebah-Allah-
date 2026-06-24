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
    disc: 'Pharogate is an immersive web platform dedicated to Ancient Egyptian history and heritage tourism. Built with modern frontend technologies, it offers travelers a seamless way to explore available tours, read reviews, and secure tickets. The application serves as a comprehensive hub for history enthusiasts, featuring dynamic sections for browsing travel itineraries, managing ticket purchases, and navigating a detailed FAQ module. By utilizing Tailwind CSS, the platform ensures a mobile-first, highly responsive design with a clean and modern user interface. Under the hood, the integration of React and Vite guarantees lightning-fast load times and optimized performance, delivering an engaging and accessible experience for users planning their journey through Ancient Egypt.',
    gitHub: 'https://github.com/HeBaMo7amed/pharogate',
    livedDemo: 'https://pharogate.vercel.app'
  },
  {
    id: 2,
    image: thanya,
    title: 'Thanya',
    disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam rem ab velit ipsam iste aliquid? Eligendi totam nulla expedita.',
    gitHub: 'https://github.com/HeBaMo7amed/THANYA',
    livedDemo: 'https://thanya-silk.vercel.app'
  },
  {
    id: 3,
    image: portfolioo,
    title: 'portfolio',
    disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam rem ab velit ipsam iste aliquid? Eligendi totam nulla expedita.',
    gitHub: 'https://github.com/HeBaMo7amed/portfolioo',
    livedDemo: 'https://portfolioo-pink-five.vercel.app'
  },
  {
    id: 4,
    image: Sadaqah,
    title: 'Sadaqah Jariyah',
    disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam rem ab velit ipsam iste aliquid? Eligendi totam nulla expedita.',
    gitHub: 'https://github.com/HeBaMo7amed/Sadaqah-Jariyah',
    livedDemo: 'https://sadaqah-jariyah-seven.vercel.app'
  },
  {
    id: 5,
    image: MyRecipies,
    title: 'MyRecipies',
    disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam rem ab velit ipsam iste aliquid? Eligendi totam nulla expedita.',
    gitHub: 'https://github.com/HeBaMo7amed/My-Recipies',
    livedDemo: 'https://hebamo7amed.github.io/My-Recipies/'
  },
  {
    id: 6,
    image: Login,
    title: 'Smart Login System',
    disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam rem ab velit ipsam iste aliquid? Eligendi totam nulla expedita.',
    gitHub: 'https://github.com/HeBaMo7amed/Smart-Login-System',
    livedDemo: 'https://hebamo7amed.github.io/Smart-Login-System/'
  },
  {
    id: 7,
    image: RaFBoOks,
    title: 'RaFBoOks',
    disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam rem ab velit ipsam iste aliquid? Eligendi totam nulla expedita.',
    gitHub: 'https://github.com/HeBaMo7amed/RaF-BoOks',
    livedDemo: 'https://hebamo7amed.github.io/RaF-BoOks/'
  },
  {
    id: 8,
    image: Bekary,
    title: 'Bakery',
    disc: 'A fully responsive and visually engaging website designed for a bakery business. Built with semantic HTML5 and modern CSS3, the project leverages Bootstrap to ensure a fluid grid system and optimal cross-device compatibility. Custom media queries were implemented to refine the layout for various screen sizes, delivering a seamless and accessible user experience. This project demonstrates a solid command of core front-end technologies and the ability to build clean, maintainable, and user-centric web interfaces.',
    gitHub: 'https://github.com/HeBaMo7amed/Bakery',
    livedDemo: 'https://hebamo7amed.github.io/Bakery/'
  },
  {
    id: 9,
    image: BookMark,
    title: 'BookMark',
    disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam rem ab velit ipsam iste aliquid? Eligendi totam nulla expedita.',
    gitHub: 'https://github.com/HeBaMo7amed/Book-Mark',
    livedDemo: 'https://hebamo7amed.github.io/Book-Mark/'
  },
  {
    id: 10,
    image: Crud,
    title: 'CRUD',
    disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam rem ab velit ipsam iste aliquid? Eligendi totam nulla expedita.',
    gitHub: 'https://github.com/HeBaMo7amed/CRUD',
    livedDemo: 'https://hebamo7amed.github.io/CRUD/'
  },
  {
    id: 11,
    image: Slider,
    title: 'Pharaonic Egypt ',
    disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam rem ab velit ipsam iste aliquid? Eligendi totam nulla expedita.',
    gitHub: 'https://github.com/HeBaMo7amed/slider',
    livedDemo: 'https://hebamo7amed.github.io/slider/'
  },
  {
    id: 12,
    image: quotes,
    title: 'quotes',
    disc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam rem ab velit ipsam iste aliquid? Eligendi totam nulla expedita.',
    gitHub: 'https://github.com/HeBaMo7amed/Random-quotes',
    livedDemo: 'https://hebamo7amed.github.io/Random-quotes/'
  },]
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
