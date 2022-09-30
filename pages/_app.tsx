import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "layouts/default";
import { MantineProvider } from "@mantine/core";
import { PropertiesDataProvider } from "~/contexts/FetchedProperties";
import { AuthProvider } from "~/contexts/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "~/components/ProtectedRoute/ProtectedRoute";
// const noAuthRequired = ["", "signin", "signup"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
