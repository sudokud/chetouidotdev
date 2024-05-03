import type { MetaFunction } from "@remix-run/node";
import LastVisit from '../components/LastVisit'
import PresenceMotion from "~/components/PresenceMotion";


export const meta: MetaFunction = () => {
  return [
    { title: "Chetoui Hamza" },
    { name: "description", content: "Welcome to Hamza's Chetoui personal blog" },
  ];
};


export default function Index() {
  return (
  <section  className='container mx-auto h-full flex justify-center items-center' >
    <PresenceMotion>
      <h6 className="text-2xl text-gray-500">
          Hello 👋🏻 , I'm a web developer based in Algeria!
      </h6>
      {/* <LastVisit/> */}
    </PresenceMotion>
  </section>
  )
}



