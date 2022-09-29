import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "layouts/default";
import { MantineProvider } from "@mantine/core";
import { PropertiesDataProvider } from "~/contexts/FetchedProperties";
import { AuthProvider } from "~/contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <PropertiesDataProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PropertiesDataProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
