import LeadRepo from "@store/Services/LeadService";
import MetaRepo from "@store/Services/MetaService";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { useQuery } from "react-query";

const AboutUsDetails = () => {
  return (
      <section className="container">
        <h1>AboutUsDetails</h1>
      </section>
  )
}
export default AboutUsDetails;
