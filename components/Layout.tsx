import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { classNames } from "../functions/classNames";

type Props = {
  title?: string;
  description?: string;
};

const Layout: FC<Props> = ({
  children,
  description = "Faktory is an integrated, full-service advertising agency in Utah with serious branding and creative chops. Our services include advertising, digital, media buying, PR, web design, event management and more.",
  title = "A Full-Service Advertising Agency In Utah",
}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const fullTitle = `${title} | Faktory Inc.`;

  return (
    <div>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <header className="sticky top-0 z-30 lg:relative flex justify-between items-end bg-white shadow-lg px-4 lg:px-14 py-2 lg:py-5">
        <div className="w-24 lg:w-auto">
          <Image
            alt="Faktory logo"
            src="/images/faktory-gold.svg"
            height="80px"
            width="145px"
          />
        </div>
        <div className="absolute lg:hidden top-0 right-0 z-20">
          <button
            className="p-5"
            onClick={() => {
              setMobileNavOpen(!mobileNavOpen);
            }}
            type="button"
          >
            {mobileNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <nav
          className={classNames(
            `bg-dark-gray bg-opacity-95 z-10 items-center justify-center text-center fixed inset-0 gap-6 font-semibold text-light-gray font-display text-2xl uppercase transition-all duration-300`,
            `lg:pt-0 lg:bg-transparent lg:relative lg:text-lg lg:flex lg:text-medium-gray`,
            mobileNavOpen
              ? `flex flex-col h-full pt-8 opacity-100`
              : `h-0 lg:h-auto overflow-hidden opacity-0 lg:opacity-100`
          )}
        >
          <a
            className="block lg:inline-block border-t lg:border-t-0 border-b-2 border-transparent hover:border-b-gold hover:text-gold transition-all tracking-wide"
            href="#"
          >
            Work
          </a>
          <a
            className="block lg:inline-block border-t lg:border-t-0 border-b-2 border-transparent hover:border-b-gold hover:text-gold transition-all tracking-wide"
            href="#"
          >
            Case Studies
          </a>
          <a
            className="block lg:inline-block border-t lg:border-t-0 border-b-2 border-transparent hover:border-b-gold hover:text-gold transition-all tracking-wide"
            href="#"
          >
            What We Do
          </a>
          <a
            className="block lg:inline-block border-t lg:border-t-0 border-b-2 border-transparent hover:border-b-gold hover:text-gold transition-all tracking-wide"
            href="#"
          >
            Who We Are
          </a>
          <a
            className="block lg:inline-block border-t lg:border-t-0 border-b-2 border-transparent hover:border-b-gold hover:text-gold transition-all tracking-wide"
            href="#"
          >
            Contact
          </a>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="grid lg:grid-cols-3 gap-8 2xl:gap-24 gap-y-24 py-24 px-4 lg:px-14 text-medium-gray text-center lg:text-left bg-dark-gray">
        <div className="grid lg:grid-cols-3 gap-8 2xl:gap-12 items-start text-sm">
          <div className="lg:col-span-1">
            <Image
              alt="Faktory logo"
              src="/images/faktory-gray.svg"
              height="80px"
              width="145px"
            />
          </div>
          <div className="lg:col-span-2">
            <p>
              702 West Porter Lane
              <br />
              Centerville, UT 84014
            </p>
            <p>
              <span className="italic">info@faktorymail.com</span>
              <br />
              Tel: 385.393.3357
            </p>
          </div>
        </div>
        <div className="text-center grid gap-12">
          <div className="flex justify-around max-w-xs grid-cols-3 mx-auto gap-8">
            <a href="https://www.facebook.com/FaktoryInc/">
              <Image
                src="/images/facebook.svg"
                alt="Facebook logo"
                width="40px"
                height="40px"
              />
            </a>
            <a href="https://www.instagram.com/faktory/">
              <Image
                src="/images/instagram.svg"
                alt="Instagram logo"
                width="40px"
                height="40px"
              />
            </a>
            <a href="https://www.linkedin.com/company/faktory-showroom/">
              <Image
                src="/images/linkedin.svg"
                alt="LinkedIn logo"
                width="40px"
                height="40px"
              />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Faktory, Inc. All Rights Reserved.
          </p>
        </div>
        <div className="mx-auto w-full flex justify-around items-start max-w-sm font-semibold tracking-wider uppercase font-display">
          <div className="grid gap-y-4 items-start">
            <Link href="/work">
              <a className="block">Work</a>
            </Link>
            <Link href="/work">
              <a className="block">Case Studies</a>
            </Link>
            <Link href="/work">
              <a className="block">What We Do</a>
            </Link>
          </div>
          <div className="grid gap-y-4 items-start">
            <Link href="/work">
              <a className="block">Who We Are</a>
            </Link>
            <Link href="/work">
              <a className="block">Contact</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
