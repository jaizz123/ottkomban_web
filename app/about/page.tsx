// app/about/page.tsx
//import Image from 'next/image';
"use client";

import React from "react";
import { Montserrat, Oregano } from "next/font/google";
import Image from "next/image";
import { Nav } from "../common/nav";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX_IMAGES || "";

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="navbar">
        <Image src=
          {`${assetPrefix}/ok-logo2-copy-529x136.webp`}
          className="navbar-logo"
          alt="logo"
        />

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

      <Image src=
        {`${assetPrefix}/about us banner.jpg`}
        alt="Barrels Background"
        className="Aboutus-banner-image"
      />

      <div className="section orgin">
        <Image src=
          {`${assetPrefix}/NELLIKA.png`}
          alt="Ottakomban Bottle"
          className="Aboutus-bottle-img"
        />
        <div className="text-block">
          <h1>Our Origin</h1>
          <h2>
            "Ottakombann means 'Lone Tusker' and like the tusker, we walk our
            own path."
          </h2>
          <p>
            This is a spirit shaped by ancient recipes and jungle wisdom. Once
            brewed in clay pots deep in the Malabar wild, we've revived this
            story for a new generation but keeping the touch of the old. Not
            just a drink, but a connection to authenticity, roots, rituals, and
            raw nature. Our founder, raised in the tropical belt of Kerala,
            brings Ayurvedic knowledge and artisanal passion to every bottle.
          </p>

          <p>
            At Ottakombann, we invite you on a journey back in time, to an era
            when craftsmanship and heritage were revered above all else. Rooted
            in centuries-old traditions, our traditional alcohol product
            embodies the essence of our ancestors, crafted with care and passion
            passed down through generations, resulting in a smooth and crisp
            taste that is unparalleled in the industry.
          </p>

          <p>
            This naturally fermented liquor is infused with the zesty, luxurious
            fruity and floral aromas of Ayurveda herbs and spices, expertly
            combined with distinctive infusion of Indian Gooseberry. The ideal
            culinary companion for this beverage is meat & fish dishes.
          </p>
        </div>
      </div>

      <div className="section make">
        <Image src=
          {`${assetPrefix}/JATHIKKA_.png`}
          alt="Ottakomban Make"
          className="Aboutus-bottle-img"
        />
        <div className="text-block">
          <h1>Our Make</h1>
          <h2>Artisan Craftsmanship Meets Modern Mastery</h2>
          <p>
            Rooted in the traditional Malayalam word “vaatte” for unaged,
            distilled spirit is a contemporary tribute to Kerala’s rich
            distilling heritage. Inspired by the once-spice capital and cradle
            of black pepper, this spirit is crafted and often mingled with
            secret regional spices and tropical fruits like nutmeg and
            gooseberry.
          </p>
          <p>
            Traditionally distilled in pot stills and bottled unaged, Otta
            kombann embodies the complex interplay of earthy, vegetal, fruity,
            and subtly peppery notes—an alcohol-forward homage to local
            tradition yet refined for contemporary palates. Born from cultural
            nostalgia and crafted for a global audience, it bridges past and
            present, respecting Kerala’s monsoon-fed lands and centuries-old
            craftsmanship while offering a smooth, exotic sip to enjoy neat or
            in cocktails.
          </p>
          <p>
            The production and distillation take place in the UK, blending
            traditional techniques with British craftsmanship for a globally
            appealing spirit.
          </p>
        </div>
      </div>

      <div className="section sip">
        <Image src=
          {`${assetPrefix}/CLASSIC RED.png`}
          alt="Ottakomban Sip"
          className="Aboutus-bottle-img"
        />
        <div className="text-block">
          <h1>Sip & Savour</h1>
          <p>
            Otta Kombann offers a vibrant profile with earthy, fruity, and
            herbal aromas. Its semi-sweet palate, featuring notes of tropical
            fruits, culminates in a long, sweet finish with a hint of
            pepperiness. This unique spirit pairs exceptionally well with a
            variety of dishes.
          </p>
          <p>
            Its bold character complements the complex spices of Indian curries,
            such as Malabari Curry, Tapioca and Beef roast, enhancing their rich
            flavors. The smoothness also balances the heat in grilled meats like
            grilled Chicken and Kebabs, while its subtle sweetness pairs
            beautifully with the delicate flavors of seafood dishes like
            Kerala-style Fish Fry. For vegetarian fare, it harmonizes with
            dishes like Paneer.
          </p>
          <p>
            Whether enjoyed neat, on the rocks, or in cocktails, Otta Kombann
            elevates the dining experience, making it a delightful companion to
            a wide array of cuisines.
          </p>
        </div>
      </div>

      <section className="herbs-section">
        <h2 className="herbs-title">
          MADE WITH TRADITIONAL SOUTH INDIAN HERBS & SPICES
        </h2>
        <p className="herbs-description">
          This naturally fermented liquor is infused with the zesty, luxurious
          fruity and floral aromas...
        </p>
      </section>

      <section className="director-message">
        <div className="director-container">
          <Image src={`${assetPrefix}/dir.png`} alt="Director" className="director-img" />
          <div className="director-text">
            <p>
              {" "}
              The Company’s long-term procurement strategy will focus on ethical
              The Company’s long-term procurement strategy will focus on ethical
              direct sourcing of spice ingredients from South Indian producers.
              The aim is to prioritise
              organic,sustainable,environmentally-conscious ingredients to
              support local economies. The production process is intended to
              respect traditional distil lation techniques while incorporating
              modern efficiencies. The Company eventually plans to develop
              initiatives for community engagement in the Western Ghats,
              aligning with the commitment to ethical practices
            </p>
            <p className="director-name">
              Binu Mani
              <br />
              <span className="title">Director</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">
          <Image
            src={`${assetPrefix}/ok-logo2-copy-529x136.webp`}
            alt="Ottakombann Logo"
          />
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com/ottakombann" aria-label="Facebook">
            <Image src={`${assetPrefix}/facebook-svgrepo-com.svg`} alt="Facebook" />
          </a>
          <a href="http://instagram.com/ottakombann_official/" aria-label="Instagram">
            <Image src={`${assetPrefix}/instagram-1-svgrepo-com.svg`} alt="Instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
}
