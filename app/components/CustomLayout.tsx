import Navigation from "./Navigation";
import Time from "./Time";
import Footer from "./Footer";
import { Link } from "@remix-run/react";
import Page from "./Page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AnimatePresence } from "framer-motion";
import { Pathname } from "../utils/Location";
import { JSXElementConstructor, ReactElement } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Github, Mail } from "@geist-ui/icons";
import ReadCVIcon from "./icons/ReadCvIcon";
export default function CustomLayout({
  children,
}: {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactElement<any, string | JSXElementConstructor<any>>[]
    | null;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });
  const key = Pathname();
  // const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <QueryClientProvider client={queryClient}>
      <nav className="sticky-navbar flex">
        <div className="flex-grow"></div>
        <div className="flex items-center mr-2">
          <Link
            to={"mailto:hey@chetoui.dev"}
            className="mx-1 flex justify-center items-center w-8 h-8 hover:bg-gray-a2 rounded-lg"
          >
            <Mail color="rgb(115,115,115)" size={17} />
          </Link>
          <Link
            to={"https://github.com/sudokud"}
            className="mx-1 flex justify-center items-center w-8 h-8 hover:bg-gray-a2 rounded-lg"
          >
            <Github color="rgb(115,115,115)" size={17} />
          </Link>
          <Link
            to={"https://read.cv/chetoui"}
            className="mx-1 flex justify-center items-center w-8 h-8 hover:bg-gray-a2 rounded-lg"
          >
            <ReadCVIcon color="rgb(115,115,115)" size={23}/>
          </Link>
        </div>
      </nav>
      <div className="p-2 container mx-auto overflow-hidden min-h-scroll">
        <Navigation />
        <AnimatePresence mode="wait">
          <Page key={key}>{children}</Page>
        </AnimatePresence>
      </div>
      {/* <span className="text-xs text-gray-43 site-version">v1.0</span> */}
      <Time />
      <Footer />
      <span className="mask"></span>
    </QueryClientProvider>
  );
}
