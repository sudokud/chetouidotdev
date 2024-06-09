import { ArrowDownRight, ArrowRight } from "@geist-ui/icons";
import { Paragraph, TitleDwarf } from "./Typography";

type cardProps = {
  title : string,
  resume: string,
  linkToArticle: string
}
export default function ArticleCard({title, resume, linkToArticle}:cardProps) {
  return (
    <div className="bg-white rounded-large border border-gray-a2 p-1">
      <div className="md:flex  rounded-large bg-gray-a1">
        <div className="px-6 py-3">
          <TitleDwarf>{title}</TitleDwarf>
          <Paragraph>
          {resume} 
          </Paragraph>
        </div>
      </div>
      <div className="py-2 rounded-large mt-1 bg-gray-a2 flex justify-center items-center">
        <a href={linkToArticle} className="text-sm font-medium mx-1">
          Link to article
        </a>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}
