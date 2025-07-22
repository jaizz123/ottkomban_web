"use client";

import Head from "next/head";
import { useState } from "react";
import { Montserrat, Oregano } from "next/font/google";

import Image from "next/image";
import { Nav } from "../common/nav";

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX_IMAGES || "";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    alert("Thank you! Your enquiry has been submitted.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
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

      <div className="contact-page">
        <div className="contact-details">
          <p>
            <strong className="strongdet">Company:</strong> Appayies Limited
          </p>
          <p>
            <strong className="strongdet">Address:</strong> 33 Chequers Way,
            Palmers Green, UK, N13 6DA
          </p>
          <p>
            <strong className="strongdet">
              Registered in England and Wales:
            </strong>{" "}
            15331526
          </p>
          <p>
            <strong className="strongdet">Mobile / WhatsApp:</strong>{" "}
            <a href="tel:+447916336379">+44 (0) 7916 336379</a>
          </p>
          <p>
            <strong className="strongdet">Email:</strong>{" "}
            <a href="mailto:info@ottamobann.com">info@ottamobann.com</a>
          </p>
        </div>

        <div className="social-section">
          <p>
            <strong>Follow Us:</strong>
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src= {`${assetPrefix}/facebook-svgrepo-com.svg`} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={`${assetPrefix}/instagram-1-svgrepo-com.svg`} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="enquiry-form-section">
          <h2 className="form-heading">Send an Enquiry</h2>
          <form
            className="contact-form"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                  name: formData.get("name"),
                  email: formData.get("email"),
                  message: formData.get("message"),
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              if (response.ok) {
                alert("Message sent!");
              } else {
                alert("Failed to send.");
              }
            }}
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
            ></textarea>
            <button type="submit" className="submit-button">
              SUBMIT ›
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
