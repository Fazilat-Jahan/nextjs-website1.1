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
            <main className="main-content">
                <section className="sectioned">
                    <div className="text-area">
                        <h1>The Wall Art: Inspiring Spaces</h1>
                        <p>
                            Welcome to The Wall Art! We are passionate about bringing creativity and inspiration into your spaces through our curated collection of wall decor ideas. Here, you all find a delightful variety of aesthetic and artistic pieces, including stunning 3D designs that truly transform any room into a masterpiece.

                            Whether you are drawn to tranquil landscapes that bring a sense of calm or vibrant abstracts that spark your imagination, our selection caters to every taste. We believe that art should resonate with you, making your home, office, or resort feel uniquely yours.

                            Join us on this journey to discover art that not only beautifies your walls but also tells your story. We are dedicated to helping you find that perfect piece that makes your space feel warm and inviting—because every wall has a tale to tell!

                            <Link href="/collection"> <button>See Art!</button></Link> </p>
                    </div>
                </section>

            </main>
        </div>

    );
}