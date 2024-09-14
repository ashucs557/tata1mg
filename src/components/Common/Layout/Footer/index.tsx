// import Image from "next/image";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import SVGIcon from "@const/SvgIcon";

const FooterLinkData = [
  {
    title: "About Us",
    children: [
      { title: "About Us", url: "/about-us", newTab: false },
      { title: "contact Us", url: "/contact-us", newTab: false },
      { title: "privacy policy", url: "/", newTab: false },
      { title: "terms & condition", url: "/", newTab: false },
    ],
  },
];

const Footer = () => (
  <footer className="footer-sec flex-0 w-full flex flex-col text-black-100 mt-2 md:mt-5 border-t border-gray-100 bg-white-400">
    <div className="container px-2 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:mb-4 gap-y-3">
        <div className=" md:flex md:pe-11">
          <div className="f-servi-icon me-5">
            <SVGIcon.F_Relatable />
          </div>
          <div className="f-list-cont">
            <h3>Reliable</h3>
            <p>
              All products displayed on Tata 1mg are procured from verified and
              licensed pharmacies. All labs listed on the platform are
              accredited
            </p>
          </div>
        </div>
        <div className=" md:flex md:px-10">
          <div className="f-servi-icon me-5">
            <SVGIcon.F_Secure />
          </div>
          <div className="f-list-cont">
            <h3>Secure</h3>
            <p>
              Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is
              Payment Card Industry Data Security Standard (PCI DSS) compliant
            </p>
          </div>
        </div>
        <div className=" md:flex md:pl-11">
          <div className="f-servi-icon me-5">
            <SVGIcon.F_Affordable />
          </div>
          <div className="f-list-cont">
            <h3>Affordable</h3>
            <p>
              Find affordable medicine substitutes, save up to 50% on health
              products, up to 80% off on lab tests and free doctor
              consultations.
            </p>
          </div>
        </div>
      </div>
      <div className="f-more">
        <div className="w-full">
          <div className="">
            <Disclosure as="div" className="">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <h3 className=" text-black">Know more about Tata 1mg</h3>
                <SVGIcon.Drop_Down_Icon className=" group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2">
                <div className="f-more-details">
                  <ul>
                    <li>
                      <div>
                        <h3>Access medical and health information </h3>
                        <p>
                          Tata 1mg provides you with medical information which
                          is curated, written and verified by experts, accurate
                          and trustworthy. Our experts create high-quality
                          content about medicines, diseases, lab investigations,
                          Over-The-Counter (OTC) health products, Ayurvedic
                          herbs/ingredients, and alternative remedies.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Order medicines online</h3>
                        <p>
                          Get free medicine home delivery in over 1800 cities
                          across India. You can also order Ayurvedic,
                          Homeopathic and other Over-The-Counter (OTC) health
                          products. Your safety is our top priority. All
                          products displayed on Tata 1mg are procured from
                          verified and licensed pharmacies.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Book lab tests</h3>
                        <p>
                          Book any lab tests and preventive health packages from
                          certified labs and get tested from the comfort of your
                          home. Enjoy free home sample collection, view reports
                          online and consult a doctor online for free.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h3>Consult a doctor online Got</h3>
                        <p>
                          a health query? Consult doctors online from the
                          comfort of your home for free. Chat privately with our
                          registered medical specialists to connect directly
                          with verified doctors. Your privacy is guaranteed.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="flex flex-col justify-start items-start">
          <p className="">
            © {new Date().getFullYear()} Tata 1mg. All rights reserved. All
            medicines are dispensed in compliance with the Drugs and Cosmetics
            Act, 1940 and Drugs and Cosmetics Rules, 1945. We do not process
            requests for Schedule X and habit forming drugs.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
