import Head from 'next/head';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import CTAContact from '../components/CTAContact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spics - Création de site web à Tournai et Mouscron</title>
        <meta name="description" content="Generated by create next app" />

        {/* Favicons */}
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#154c89" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />

        {/* Fonts */}
        <link rel="preload" href="../../public/assets/fonts/Tuffy.woff2" as="font" type="font/woff2" crossOrigin />

      </Head>

      <Navbar />
      <Hero />

      <main>
        <Services />
        <CTAContact />
      </main>
    </div>
  );
}
