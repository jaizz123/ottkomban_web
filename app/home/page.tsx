"use client";
import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "../common/nav";

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX_IMAGES || "";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  const productImages = [
    "/images/ok-img4-copy-1167x1667.webp",
    "/images/ok-img4-copy-1167x1667.webp",
    "/images/ok-img4-copy-1167x1667.webp",
  ];

  const [index, setIndex] = useState(0);
const [menuOpen, setMenuOpen] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % productImages.length);
  const prev = () =>
    setIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
 



  return (
    <div className="page-wrapper">
      <div className="hero-section">
        <Image
          src={`${assetPrefix}/hom.jpg`}
          width={800}
          height={600}
          alt="Banner"
          className="hero-banner"
        />

        <a href="../about/index.html" className="know-more-btn">
          Know More
        </a>

        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-toggle"
          onChange={() => {}}
        />
        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <Nav />
      </div>

      <section className="pagesection">
        <hr className="section-divider" />
        {/* You can uncomment the below content if needed, after fixing its formatting */}
      </section>

      <section className="products-section" id="products">
        <h2 className="products-heading">
          <span className="bold" style={{ color: "black" }}>OUR</span>{" "}
          <span className="highlight">PRODUCTS</span>
        </h2>
        <p className="products-subheading">
          Experience Ottakomban in three bold expressions — Gooseberry for a
          tangy-sweet twist, Nutmeg for warm spice and depth, and Classic Red
          for a rich, earthy finish. Each handcrafted to celebrate Kerala’s
          untamed spirit.
        </p>

        <div className="products-container">
          {[
            {
              title: "GOOSEBERRY",
              img: `${assetPrefix}/NELLIKA.png`,
              desc: "The original Tusker delivers a tangy burst of gooseberry, a South Indian Ayurvedic favorite for its taste and health benefits.",
            },
            {
              title: "NUTMEG",
              img: `${assetPrefix}/JATHIKKA_.png`,
              desc: "The original Tusker delivers a tangy burst of gooseberry, a South Indian Ayurvedic favorite for its taste and health benefits.",
            },
            {
              title: "CLASSIC RED",
              img: `${assetPrefix}/CLASSIC RED.png`,
              desc: "This un-aged spirit blends nutmeg, gooseberry, and Indian redwood for a rich, earthy flavor with warm spice and subtle sweetness.",
            },
          ].map((item, i) => (
            <Link href="/product#productnames" scroll={false} className="product-link" key={i}>
              <div className="product">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="product-img"
                />
                <div className="product-details">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-desc">{item.desc}</p>
                  <span className="know-more-link">Know More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="know-more-btn2-div">
        <a href="../uae/index.html" className="know-more-btn2">
          Know More
        </a>
        <Image
          src={`${assetPrefix}/Uae Main.png`}
          width={800}
          height={600}
          className="uae-home-image"
          alt="UAE Product"
        />
      </div>

      <a
        href="https://tinyurl.com/5633tpyb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`${assetPrefix}/Uae product page.png`}
          width={800}
          height={600}
          className="uae-product-image"
          alt="UAE Product Page"
        />
      </a>

      <Image
        src={`${assetPrefix}/PRODUCTION PROCESS.png`}
        width={800}
        height={600}
        className="production-image"
        alt="Distillation Process"
      />

      <Image
        src={`${assetPrefix}/COCKTAIL RECIPES.png`}
        width={800}
        height={600}
        className="cocktail-recipes"
        alt="Cocktail Recipes"
      />

      <Image
        src={`${assetPrefix}/PACKAGE BOX.png`}
        width={800}
        height={600}
        className="package-box"
        alt="Packaging"
      />

      <Image
        src={`${assetPrefix}/TESTIMONIAL.png`}
        width={800}
        height={600}
        className="testimonial-image"
        alt="Customer Testimonial"
      />

      <div className="warf">
        <Image
          src={`${assetPrefix}/warf.png`}
          width={800}
          height={600}
          className="warf-image"
          alt="Warf"
        />
      </div>
    </div>
  );
}
