import type { MetaFunction } from "@remix-run/node";
import ArticleCard from "~/components/Card";
import Page, { Modiv } from "~/components/Page";
// import PresenceMotion from "~/components/PresenceMotion"
export const meta: MetaFunction = () => {
  return [
    { title: "Writing" },
    { name: "description", content: "Hamza chetoui's Articles and Writing" },
  ];
};
export default function Writing() {
  return (
   

      <div className="flex justify-center items-center">
        <ArticleCard />
      </div>
   
     
  );
}