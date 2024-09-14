
import { LayoutProps } from "@types";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import { NextSeo } from "next-seo";
import router from "next/router";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <NextSeo
        title="Online Pharmacy India | Buy Medicines from India's Trusted Medicine Store: 1mg.com"
        description="'India's best online pharmacy with a wide range of Prescription and OTC medicines. Order medicines online at 1mg's medicine store in 100+ cities like - Delhi, Mumbai, Bangalore, Kolkata, Hyderabad, Gurgaon, Noida, Pune etc. with free home delivery and exciting offers. Check Now!'"
        canonical={`www.1mg.com/`}
        openGraph={{
          title: 'www.1mg.com',
          description: "'India's best online pharmacy with a wide range of Prescription and OTC medicines. Order medicines online at 1mg's medicine store in 100+ cities like - Delhi, Mumbai, Bangalore, Kolkata, Hyderabad, Gurgaon, Noida, Pune etc. with free home delivery and exciting offers. Check Now!'",
          type: "website",
          locale: "en_IE",
          url: `www.1mg.com/`,
          siteName: "1mg",

          images: [
            {
              url: 'https://www.1mg.com/images/tata_1mg_logo.svg',
              alt: 'logo'
            }
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "og:title",
            content: "Online Pharmacy India | Buy Medicines from India's Trusted Medicine Store: 1mg.com",
          },
          {
            property: "og:site_name",
            content: "1mg",
          },
          {
            property: "og:url",
            content: "www.1mg.com",
          },
          {
            property: "og:description",
            content: "India's best online pharmacy with a wide range of Prescription and OTC medicines. Order medicines online at 1mg's medicine store in 100+ cities like - Delhi, Mumbai, Bangalore, Kolkata, Hyderabad, Gurgaon, Noida, Pune etc. with free home delivery and exciting offers. Check Now!",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:image",
            content: "https://www.1mg.com/images/tata_1mg_logo.svg",
          },
          {
            property: "twitter:card",
            content: "summary",
          },
          {
            property: "twitter:title",
            content: "Online Pharmacy India | Buy Medicines from India's Trusted Medicine Store: 1mg.com",
          },
          {
            property: "twitter:site",
            content: "@1mgofficial",
          },
          {
            property: "twitter:description",
            content: "India's best online pharmacy with a wide range of Prescription and OTC medicines. Order medicines online at 1mg's medicine store in 100+ cities like - Delhi, Mumbai, Bangalore, Kolkata, Hyderabad, Gurgaon, Noida, Pune etc. with free home delivery and exciting offers. Check Now!",
          },
          {
            property: "twitter:image",
            content: "https://www.1mg.com/images/tata_1mg_logo.svg",
          },
          {
            property: "twitter:image:alt",
            content: "1mg",
          },
          {
            property: "twitter:domain",
            content: "1mg.com",
          },
        ]} />
      <main className="">
        {children}

        
      </main>
      <Footer />
    </>
  );
}
