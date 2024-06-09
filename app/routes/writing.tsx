import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import ArticleCard from "~/components/Card";
import { HumanTitle } from "~/components/Typography";
export const meta: MetaFunction = () => {
  return [
    { title: "Writing" },
    { name: "description", content: "Hamza chetoui's Articles and Writing" },
  ];
};
const Links = {
  strapi:
    "https://strapi.io/blog/how-to-create-an-api-with-strapi-by-rebuilding-the-mdn-express-js-local-library-website",
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
export default function Writing() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container mx-auto max-w-content"
    >
      <motion.div variants={item}>
        <HumanTitle>Articles</HumanTitle>
      </motion.div>
      <motion.div variants={item} className="mt-12">
        <ArticleCard
          title="Creating an API with Strapi"
          resume="Website rebuilt with Strapi.js and Next.js inspired by the Mozilla Developer Network Express.js tutorial series."
          linkToArticle={Links.strapi}
        />
      </motion.div>
    </motion.div>
  );
}
