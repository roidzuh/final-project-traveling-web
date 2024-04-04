import Head from "next/head";
import MainLayout from "@/layout/MainLayout";
import Hero from "@/components/Hero";
import { fetchBanners } from "../utils/api";

export async function getServerSideProps() {
  const banners = await fetchBanners();
  return { props: { banners } };
}

export default function Home({ banners }) {
  return (
    <>
      <Head>
        <title>Travelo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Hero banners={banners} />
      </MainLayout>
    </>
  );
}
