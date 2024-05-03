import type { MetaFunction } from "@remix-run/node";
import PresenceMotion from "~/components/PresenceMotion"
import { Link } from "@remix-run/react";
import {Paragraph} from "../components/Typography"
export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "About Hamza chetoui" },
  ];
};

const RosenGroupWebsite = () => {
  return <Link className="underline" to={'https://www.rosen-group.com/en'}>Rosen group</Link>
}
export default function About() {
  return (
    <div  className='container mx-auto flex justify-center items-center' >
      <PresenceMotion>
        <div className="max-w-screen-sm leading-8 text-zinc-500 ">
        <Paragraph>
          Self taught web developer, Completed the Master's Program at the institute of Science and technologie university of Blida ,have passion for learning and try different things.  
          currently my preferred stack is React, (Fastify) nodejs, vite with remix as a plugin, tailswindcss and cloudflare.
          My diverse background includes roles as a Survey Engineer <RosenGroupWebsite/> and a Maintenance Engineer, giving me a unique understanding of real-world challenges.  
          When he's not writing clean code, Hamza read how to write clean code.  
          ☕ keeps the creativity flowing
          Always up for new adventures and improving
          <p className="mt-9">
            Let's craft something amazing together !
          </p>

          <p className="mt-24">last updated on 05/03/2024</p>
        </Paragraph>
        </div>
      </PresenceMotion>
    </div>
  );
}