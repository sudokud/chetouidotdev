import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Paragraph, HumanTitle } from "../components/Typography";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Chetoui Hamza" },
    {
      name: "description",
      content:
        "Self-taught web developer with expertise in React, Node.js, Fastify, Vite, Remix, TailwindCSS, Cloudflare, and web animation.",
    },
    {
      name: "keywords",
      content:
        "Frontend Developer, Web Developer, React.js, Node.js, Fastify, Vite, Remix, TailwindCSS, Cloudflare, Responsive Web Design, JavaScript, HTML, CSS, RESTful APIs, Web Animation, Interactive Design, Clean Code, Software Development Best Practices",
    },
  ];
};
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    y: -20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};
export default function Index() {
  return (
    <article className="container mx-auto flex justify-center pb-5 max-w-content">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="p-1"
      >
        <motion.div variants={item}>
          <HumanTitle>Resume</HumanTitle>
        </motion.div>
        <motion.div variants={item}>
          <Paragraph>
            With a Master's degree from the Institute of Science and Technology
            University of Blida in automation and industrial informatics. Self
            taught web developer. mostly working with React, Node.js, have
            experience building APIs with Strapi and Cloudflare workers
          </Paragraph>
        </motion.div>
        <motion.div variants={item}>
          <Paragraph>
            With a diverse background that includes roles as a field Survey
            Engineer at Rosen Group and a Maintenance Engineer, I bring a unique
            understanding of real-world challenges to my work. Have a deep
            understanding of modern web development practices, including
            JavaScript frameworks, HTML, CSS, and RESTful APIs. Additionally, I
            have a keen interest in web animation, enhancing user experiences
            with interactive and engaging elements.
          </Paragraph>
        </motion.div>
        <motion.div variants={item}>
          <Paragraph>
            When I'm not coding, I enjoy reading about best practices in
            software development to continuously improve my skills. I am always
            eager to take on new projects and challenges.
          </Paragraph>
        </motion.div>
        <motion.div variants={item}>
          <Paragraph>Let's craft something amazing together !</Paragraph>
        </motion.div>
        <motion.div variants={item}>
          <span className="my-4 border border-transparent">
            <hr />
          </span>
        </motion.div>
        <motion.div variants={item}>
          <HumanTitle>Past Work.</HumanTitle>
        </motion.div>
        <motion.div variants={item}>
          <Paragraph>
            <Link
              className="text-sm leading-tight font-medium text-black underline"
              to={"https://elevatin-agency.netlify.app/"}
            >
              Agency website built with Nuxt
            </Link>
          </Paragraph>
        </motion.div>
      </motion.div>
    </article>
  );
}
