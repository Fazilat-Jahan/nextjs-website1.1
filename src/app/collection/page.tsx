"use client";
import { useState } from "react";
import Image from "next/image";
import logo from '@/app/images/logo.jpg';
import Link from "next/link";

export default function Page() {
  const images = [
    '/images/7.jpg',
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg',
    '/images/image9.jpg',
    '/images/image10.jpg',
    '/images/image11.jpg',
    '/images/image12.jpg',
    '/images/image13.jpg',
    '/images/image14.jpg',
  ];

  const [selectedImage, setselectedImage] = useState<string | null>(null);

  // handdling clickable image
  const handleImageClick = (src: string): void => {
    setselectedImage(src);
  };

  //close the model
  const handleCloseClick = (): void => {
    setselectedImage(null);
  };

  return (
    <div className="page-body-wh">
      <div className="nav-div">
        <nav className=" navbardiv">
          <div className="logodiv">
            <Link href="/">
              <Image src={logo} alt="wall art logo" width={100} height={65} className="logoradius" />
            </Link>
          </div>

          <div className="nav-heading">
                        <h1>The Wall Art: Inspiring Spaces</h1>
                    </div>

          <div className="button">
            <Link href="/collection">
              <button> Collection </button> </Link>

            <Link href="/about">
              <button> About Us </button> </Link>
          </div>
        </nav>
      </div>

      <div className="page-heading">
        <h1> The Wall Art: Inspiring Spaces</h1>
      </div>

      <main className="main-area">
        <div className="grid-layout">

          {
            images.map((src, index) => (
              <div key={index} className="map-image">
                <img src={src} alt={`wall art ${index + 1}`} className="image" onClick={() => handleImageClick(src)} />
              </div>
            )
            )
          }

        </div>
      </main>

      {
        selectedImage && (
          <div className="selected-image">
            <div className="button-div">
              <button onClick={handleCloseClick}> &times; </button>
              <img src={selectedImage} alt="wall art" className="popup-image" />
            </div>

          </div>
        )
      }


    </div>

  );
}