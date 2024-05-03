import type { MetaFunction } from "@remix-run/node";
import ArticleCard from "~/components/Card";
import PresenceMotion from "~/components/PresenceMotion"
export const meta: MetaFunction = () => {
  return [
    { title: "Writing" },
    { name: "description", content: "Hamza chetoui's Articles and Writing" },
  ];
};
export default function Writing() {
  return (
    <div className="h-full flex justify-center items-center">
      <PresenceMotion>
        <ArticleCard />
      </PresenceMotion>
    </div>
  );
}