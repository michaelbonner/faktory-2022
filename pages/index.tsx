import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Faktory 2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-end bg-white shadow-lg px-4 lg:px-14 lg:py-5">
        <Image
          alt="Faktory logo"
          src="/images/faktory-gold.svg"
          height="80px"
          width="145px"
        />
        <nav className="flex gap-6 font-semibold text-medium-gray font-display text-lg uppercase">
          <a
            className="border-b-2 border-white hover:border-b-gold hover:text-gold transition-all tracking-wide"
            href="#"
          >
            Work
          </a>
          <a
            className="border-b-2 border-white hover:border-b-gold hover:text-gold transition-all tracking-wide"
            href="#"
          >
            Case Studies
          </a>
          <a
            className="border-b-2 border-white hover:border-b-gold hover:text-gold transition-all tracking-wide"
            href="#"
          >
            What We Do
          </a>
          <a
            className="border-b-2 border-white hover:border-b-gold hover:text-gold transition-all tracking-wide"
            href="#"
          >
            Who We Are
          </a>
          <a
            className="border-b-2 border-white hover:border-b-gold hover:text-gold transition-all tracking-wide"
            href="#"
          >
            Contact
          </a>
        </nav>
      </header>

      <main>
        <div className="bg-dark-gray">
          <div className="max-w-7xl mx-auto px-4 py-24 lg:py-36 text-white grid lg:grid-cols-2 items-end">
            <h1 className="text-[180px] leading-[0.8] font-bold font-serif">
              <span className="block">Go</span>
              <span className="block">Beyond</span>
              <span className="block text-gold">Good</span>
            </h1>
            <div className="grid gap-y-24 justify-end">
              <div className="flex justify-end">
                <Image
                  src="/images/brand-bars.svg"
                  alt="Brand bars"
                  width="240px"
                  height="40px"
                />
              </div>
              <div className="uppercase font-display text-5xl leading-tight">
                Something about being a
                <span className="block">full service agency maybe?</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
