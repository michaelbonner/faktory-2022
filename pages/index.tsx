import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const [featureImageHeight, setFeatureImageHeight] = useState(100);
  const featureImage = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = featureImage.current;
    if (image) {
      const { height } = image.getBoundingClientRect();
      setFeatureImageHeight(height);
    }
  }, [featureImage]);

  return (
    <Layout
      title="A Full-Service Advertising Agency In Utah"
      description="Faktory is an integrated, full-service advertising agency in Utah with serious branding and creative chops. Our services include advertising, digital, media buying, PR, web design, event management and more."
    >
      <div>
        <div className="bg-dark-gray">
          <div className="max-w-7xl mx-auto px-4 py-24 lg:py-36 text-white grid lg:grid-cols-2 items-end">
            <h1 className="text-[20vw] lg:text-[160px] 2xl:text-[200px] leading-[0.8] font-bold font-serif">
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
              <div className="uppercase font-display text-[40px] 2xl:text-[50px] lg:text-5xl leading-tight">
                Something about being a
                <span className="block">full service agency maybe?</span>
              </div>
            </div>
          </div>
          <div
            className="max-w-7xl mx-auto px-4"
            style={{
              marginBottom: `${featureImageHeight / 2}px`,
              maxHeight: `${featureImageHeight / 2}px`,
            }}
          >
            <div
              className="aspect-w-16 aspect-h-9"
              ref={featureImage}
              style={{
                height: `${featureImageHeight}px`,
              }}
            >
              <Image
                src="/images/stock/christian-wiebel-kkjdOX5SIqA-unsplash.jpg"
                alt="stock"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="bg-near-white py-24">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
            <Link href="/work">
              <a className="orangeFillButton">View our recent work</a>
            </Link>
          </div>
        </div>
        <div className="bg-mint">
          <div className="max-w-7xl mx-auto px-4 py-24 lg:py-36 text-white grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-w-9 aspect-h-8">
                <Image
                  src="/images/stock/geio-tischler-UtilSW8zuZk-unsplash.jpg"
                  alt="stock"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            </div>
            <div className="grid gap-y-4">
              <h3 className="text-gold">
                Headline about our extensive healthcare industry experience
              </h3>
              <p className="p2 text-dark-gray">
                Pulling teeth we need distributors to evangelize the new line to
                local markets we need distributors to evangelize the new line to
                local markets, nor slipstream and wiggle room fire up your
                browser. Push back. Five-year strategic plan bake it in but i do
                not want to drain the whole swamp, i just want to shoot some
                alligators.
              </p>
              <div className="mt-12">
                <Link href="/work">
                  <a className="standardButton">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-near-white text-center">
          <div className="max-w-7xl mx-auto px-4 py-24 lg:py-36 grid gap-16 items-center">
            <h2>Snappy Headline Goes Here</h2>
            <p>
              Quick-win going forward, yet value-added, but a tentative event
              rundown is attached for your reference, including other happenings
              on the day you are most welcome to join us beforehand for a light
              lunch we would also like to invite you to other activities on the
              day
            </p>
            <div>
              <Link href="/work">
                <a className="standardButton">Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
