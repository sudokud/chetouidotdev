import { Paragraph, SmallTitle } from "./Typography";

const LinkToStrapiArticle = 'https://strapi.io/blog/how-to-create-an-api-with-strapi-by-rebuilding-the-mdn-express-js-local-library-website'
export default function ArticleCard() {
  return (
    <div className="max-w-96 mx-auto border rounded-3xl overflow-hidden">
      <div className="md:flex">
        <div className="p-8">
          <SmallTitle>Strapi local library web app</SmallTitle>
          <Paragraph>CRUD web app built with Strapi.js and Next.js inspired by the Mozilla Developer Network Express.js tutorial series.</Paragraph>
          <span className="">
            <a href={LinkToStrapiArticle} className="text-sm leading-tight font-medium text-black underline">
              Strapi.io
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}