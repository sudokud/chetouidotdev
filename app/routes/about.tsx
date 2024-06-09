import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Paragraph, HumanTitle } from "../components/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { variants } from "~/utils/motion-variants";
import { Key } from "~/utils/Location";
import Page, { Modiv } from "~/components/Page";
import { useOutletContext } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "read resume about Hamza chetoui" },
  ];
};

const RosenGroupWebsite = () => {
  return (
    <Link className="underline" to={"https://www.rosen-group.com/en"}>
      Rosen group
    </Link>
  );
};
export default function About() {
  return (
    <article className="container mx-auto flex justify-center">
      <div className="max-w-560 leading-8 text-zinc-500 ">
        <Paragraph>
          Self taught web developer, Completed the Master's Program at the
          institute of Science and technologie university of Blida ,have passion
          for learning and try different things. currently my preferred stack is
          React, (Fastify) nodejs, vite with remix as a plugin, tailswindcss and
          cloudflare. My diverse background includes roles as a Survey Engineer{" "}
          <RosenGroupWebsite /> and a Maintenance Engineer, giving me a unique
          understanding of real-world challenges. When he's not writing clean
          code, Hamza read how to write clean code. ☕ keeps the creativity
          flowing Always up for new adventures and improving
        </Paragraph>
        <Paragraph>Let's craft something amazing together !</Paragraph>
        <hr />
        <HumanTitle>Works</HumanTitle>
        <Paragraph>
          <Link
            className="text-sm leading-tight font-medium text-black underline"
            to={"https://elevatin-agency.netlify.app/"}
          >
            Agency website built with Nuxt
          </Link>
        </Paragraph>
        {/* <Paragraph>last updated on 05/03/2024</Paragraph> */}
      </div>
    </article>
  );
}
