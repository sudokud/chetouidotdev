import { AnimatePresence, motion } from "framer-motion";

const person = {
  name: "Hamza Chetoui",
  email: "hey@chetoui.dev",
  imageUrl: "/profile.jpg",
  role: "Engineer / Developer / Designer in Algeria",
};

export const variants = {
  Enter: {
    y:0,
    scaleX:1, scaleY:1,
    opacity:1,
    transition: {
      type:'spring',
      duration: 0.6,
      bounce: 0.5,
      // when: "beforeChildren",
    }
  }
}
export default function Profile() {
  return (
    <AnimatePresence>
      <motion.div
       initial={{ y: -5, opacity: 0, scaleX:0.8, scaleY:0.9}}
       animate="Enter"
       variants={variants}
       className="px-4 py-2 flex bg-gray-a1  border border-gray-a2 rounded-3xl">
        <div className="grow mr-6 overflow-hidden flex-col">
          <h5 className="mt-1 font-normal text-lg lg:text-xl text-black">
            {person.name}
          </h5>
          <p className="text-xs truncate text-gray-i1">{person.role}</p>
        </div>
        <div className="">
          <img
            className="h-12 w-12 lg:h-14 lg:w-14 rounded-full"
            src={person.imageUrl}
            alt="hamza chetoui"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
