import type { MetaFunction } from "@remix-run/node";
import Page, { Modiv } from "~/components/Page";
// import LastVisit from '../components/LastVisit'
// import { AnimatePresence, motion } from "framer-motion";
// import { Key } from "~/utils/Location";
// import { variants } from "~/utils/motion-variants";
import { useOutletContext } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "Chetoui Hamza" },
    { name: "description", content: "Welcome to Hamza's Chetoui personal blog" },
  ];
};

export default function Index() {
  return (
 
   
        <section  className='container mx-auto flex justify-center'>
          <h6 className="text-2xl text-gray-500">
            Hello 👋🏻 , <br/> I'm a web developer based in Algeria!
          </h6>
          {/* <LastVisit/> */}
        </section>
      
  
  )
}



