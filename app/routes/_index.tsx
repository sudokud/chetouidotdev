import type { MetaFunction } from "@remix-run/node";
import LastVisit from "../components/LastVisit";
export const meta: MetaFunction = () => {
  return [
    { title: "Chetoui Hamza" },
    {
      name: "description",
      content: "Welcome to Hamza's Chetoui personal Personal website",
    },
  ];
};

export default function Index() {
  return (
    <section className="container mx-auto flex justify-center">
      <div className="flex-col">
        <h6 className="text-2xl">
          Hello 👋🏻 , <br /> I'm a web developer based in Algeria!
        </h6>
        <LastVisit />
      </div>
    </section>
  );
}
