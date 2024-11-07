import Image from "next/image";
import logo from '@/app/images/logo.jpg';
import Link from "next/link";

export default function Page() {
  return (
    <div className="page-body">
      <div className="nav-div">
        <nav className=" navbardiv">
          <div className="logodiv">
            <Link href="/">
              <Image src={logo} alt="wall art logo" width={100} height={65} className="logoradius" />
            </Link>
          </div>
          <div className="button">
            <Link href="/collection">
              <button> Collection </button> </Link>

            <Link href="/about">
              <button> About Us </button> </Link>
          </div>
        </nav>
      </div>

      <div>
        <main className="main">
          <section className="section">
            <div className="text">
              <h1>
                The Wall Art: Inspiring Spaces
              </h1>
              <p>
                Welcome to our esteemed collection of wall art ideas where you all find the finest pieces of art from around the world. Our mission is to provide you with a diverse range of artistic and asthetic styles that can transform any space into a masterpiece.
              </p>
              <Link href="/about">
                <button>Know More</button>
              </Link>
            </div>
          </section>

          <section className="section2">
          <div className="imagesection1">
              <div className="image1">
                <img src="/images/4.jpg" alt="wall art" className="image11"/>
              </div>
              <div className=" image2">
                <img src="/images/image3.jpg" alt="wall art" className="image22 " />
              </div>
            </div>

            <div className="imagesection2">
              <div className=" image3 ">
                <img src="/images/image6.jpg" alt="wall art" className="image33 " />
              </div>
              <div className="buttondiv">
                <Link href="/collection">
                  <button> More Collection </button>
                </Link> </div>

            </div>
          </section>

        </main>
      </div>
      </div>
  );
}
