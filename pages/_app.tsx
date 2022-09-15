import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "layouts/default";
import { MantineProvider } from "@mantine/core";
import { PropertiesDataProvider } from "~/contexts/FetchedProperties";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <PropertiesDataProvider >
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </PropertiesDataProvider>
    </>
  );
}

export default MyApp;
