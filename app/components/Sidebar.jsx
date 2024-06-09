// GET Shit WORK, Polish Code Later 
import { Link } from "@remix-run/react";
import Github from "@geist-ui/icons/github";
import ReadCVIcon from "./icons/ReadCvIcon";
import { useState } from "react";
import joinClasses from "classnames";

function Tooltip({ text, className }) {
  return <span className={className}>{text}</span>;
}
export default function Sidebar() {
  const [Rcv, setRcvVisible] = useState(false);
  const [GH, setGhVisible] = useState(false);
  const RcvClass = joinClasses(
    "text-xs bg-black text-white p-2 rounded-xl",
    {
    "m-fadeOut ": !Rcv,
    "m-fadeIn": Rcv,
  });
  const GhClass = joinClasses(
    "text-xs bg-black text-white p-2 rounded-xl",
    {
    "m-fadeOut ": !GH,
    "m-fadeIn": GH,
  });
  return (
    <aside className="sidebar">
      <div className="flex flex-col items-center">
        <span
          className="relative my-3  w-8 h-8 flex justify-center items-center"
          onMouseEnter={() => setGhVisible(true)}
          onMouseLeave={() => setGhVisible(false)}
        >
          <Link to={"https://github.com/sudokud"}>
            <Github color="#333" size={20} />
            <Tooltip className={GhClass} text={"Github"} />
          </Link>
        </span>
        <span
          className="relative my-3  w-8 h-8 flex justify-center items-center"
          onMouseEnter={() => setRcvVisible(true)}
          onMouseLeave={() => setRcvVisible(false)}
        >
          <Link to={"https://read.cv/chetoui"}>
            <ReadCVIcon />
            <Tooltip className={RcvClass} text={"Read.cv"} />
          </Link>
        </span>
      </div>
    </aside>
  );
}
