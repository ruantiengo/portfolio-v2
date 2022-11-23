import { NextSeo } from "next-seo";
import Head from "next/head";

import { AppConfig } from "./AppConfig"

const Meta = () => {
  const appConfig = AppConfig()
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
        title={appConfig.title}
        description={appConfig.description}
        canonical={appConfig.canonical}
        openGraph={{
          title: appConfig.title,
          description: appConfig.description,
          url: appConfig.canonical,
          site_name: appConfig.site_name,
        }}
      />
    </>
  );
};

export default Meta;