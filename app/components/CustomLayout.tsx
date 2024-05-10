import Navigation from "./Navigation";
import Time from "./Time";
import Footer from "./Footer";
import Socials from "./Socials";
import Page from "./Page";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";
import { Pathname } from "../utils/Location";
import { JSXElementConstructor, ReactElement } from "react";

export default function CustomLayout({
  children,
}: {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactElement<any, string | JSXElementConstructor<any>>[]
    | null;
}) {
  const queryClient = new QueryClient();
  const key = Pathname();
  return (
    <QueryClientProvider client={queryClient}>
      <Time />
      <Socials />
      <div className="flex flex-col overflow-hidden">
        <Navigation />
        <AnimatePresence mode="wait">
          <Page key={key}>{children}</Page>
        </AnimatePresence>
      </div>
      <span className="site-version">v1.0</span>
      <Footer />
    </QueryClientProvider>
  );
}
