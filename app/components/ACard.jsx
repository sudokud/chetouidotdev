import { Link } from "@remix-run/react";
import Github from "@geist-ui/icons/github";
import ReadCVIcon from "./icons/ReadCvIcon";
export default function SocialCard() {
  return (
    <div className="bg-white p-3 rounded-3xl overflow-hidden w-24 h-24">
      <div className="flex justify-center align-center">
        <Link to={"https://read.cv/chetoui"}>
          <ReadCVIcon />
        </Link>{" "}
        <Link to={"https://github.com/sudokud"}>
          <Github color="#333" size={22} />
        </Link>
      </div>
    </div>
  );
}
