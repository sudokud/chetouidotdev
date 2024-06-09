import { useState } from "react";
import { useInterval } from "@reactuses/core";
import { useLocation } from "@remix-run/react";
import { motion } from "framer-motion";

export default function Time() {
  const location = useLocation();

  const date = new Date();
  const ss = date.getSeconds();
  const mm = date.getMinutes();
  const hh = date.getHours();
  const [seconds, setSeconds] = useState(ss);
  const [minutes, setMinutes] = useState(mm);
  const [hours, setHours] = useState(hh);

  useInterval(() => {
    const date = new Date();
    const ss = date.getSeconds();
    const mm = date.getMinutes();
    const hh = date.getHours();
    setSeconds(ss);
    setMinutes(mm);
    setHours(hh);
  }, 1000);
  return (
    <motion.div
      animate={{
        width: location.pathname == '/' ? "174px": '215px',
      }}
      transition={{type:'spring', duration: 0.5 }}
      className="clock bg-gray-a1 border border-gray-a2 flex pr-3 py-1 rounded-md"
    >
      <p className="min-w-16 flex justify-center ml-1 md:text-sm sm:text-sm">
        {hours > 9 ? hours : `0${hours}`}:
        {minutes > 9 ? minutes : `0${minutes}`}:
        {seconds > 9 ? seconds : `0${seconds}`}
      </p>
      <motion.p 
      initial={{opacity:0}}
      animate={{
        opacity: 1,
      }} transition={{type:'spring', duration: 0.5 }} className=" sm:text-sm md:text-sm">
        <span className="text-gray-a3">|</span> chetoui.dev
        {location.pathname}
      </motion.p>
    </motion.div>
  );
}
