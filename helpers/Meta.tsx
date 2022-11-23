import { NextSeo } from "next-seo";
import Head from "next/head";

import { AppConfig } from "./AppConfig"

const Meta = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
      </Head>
      <NextSeo
        title={AppConfig.title}
        description={AppConfig.description}
        canonical={AppConfig.canonical}
        openGraph={{
          title: AppConfig.title,
          description: AppConfig.description,
          url: AppConfig.canonical,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export default Meta;