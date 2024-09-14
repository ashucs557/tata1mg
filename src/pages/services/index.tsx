import LeadRepo from "@store/Services/LeadService";
import MetaRepo from "@store/Services/MetaService";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { useQuery } from "react-query";

function Services({ metaDetail }: InferGetStaticPropsType<typeof getStaticProps>) {
  // const [filter, setFilter] = useState({ TestCode: "z001" });
  // const { isLoading: overviewLoading } = useQuery("getOverview", () => LeadRepo.getOverview(filter));
  return (
    <>
      <NextSeo
        title={metaDetail?.SeoTitle}
        description={metaDetail?.SeoDescription}
        canonical={``}
      />
      <div className="container">
        <h1>werthyjukilikjhgfdrthyjkl services</h1>
      </div></>
  )
}
export default Services;
export const getStaticProps: GetStaticProps = async (context: any) => {
  const res: any = await MetaRepo.getMeta("services");
  const metaData = res?.Data;
  return (
    { props: { metaDetail: metaData || [] }, revalidate: 10, }
  )
}
