import { Link, useLocation } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import Profile from "./Profile";
import "../styles/shared.css";

const spring = {
  type: "spring",
  bounce: 0.3,
  duration: 0.5,
};

export default function Navigation() {
  const location = useLocation();
  return (
    <nav className="flex justify-center container mx-auto">
      <div className="p-1">
        <Profile />
        <div className="flex items-center w-fit mt-8 mb-16 py-1">
          <div className="mr-3 relative">
            <Link
              className={`text-sm px-2 font-light ${
                location.pathname == "/" ? "text-black" : "text-gray-a4"
              }`}
              to="/"
            >
              Home
            </Link>
            <AnimatePresence>
              {location.pathname == "/" && (
                <motion.div
                  transition={spring}
                  className="active-link-dot bg-gray-a4"
                  layoutId="active-link-dot"
                />
              )}
            </AnimatePresence>
          </div>

          <div className="mx-3 relative">
            <Link
              className={`text-sm px-2 font-light ${
                location.pathname == "/writing"
                  ? "text-black"
                  : "text-gray-a4"
              }`}
              to="/writing"
            >
              Writing
            </Link>
            <AnimatePresence>
              {location.pathname == "/writing" && (
                <motion.div
                  transition={spring}
                  className="active-link-dot bg-gray-a4"
                  layoutId="active-link-dot"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
