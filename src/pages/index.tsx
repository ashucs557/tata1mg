// import BlogCard from "@components/Home/BlogCard";
import TabButtons from "@components/Common/TabButton";
import MetaRepo from "@store/Services/MetaService";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

function Home({ metaDetail }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <NextSeo
        title={metaDetail?.SeoTitle}
        description={metaDetail?.SeoDescription}
        canonical={metaDetail?.CanonicalUrl}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: metaDetail?.SeoKeywords
          }
        ]}
      />

      <TabButtons/>
     
    </>
  );
}
export default Home;
export const getStaticProps: GetStaticProps = async () => {
  const res: any = await MetaRepo.getMeta("home");
  const metaData = res?.Data;
  return { props: { metaDetail: metaData || [] }, revalidate: 10 };
};
