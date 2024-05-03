import { Link, useLocation } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import Profile from "./Avatar"
import '../styles/shared.css'

const spring = {
  type: "spring",
  bounce:.4,
  duration: .8
}

export default function Navigation() {
  const location = useLocation();
return (
  <nav className="nav py-9 flex justify-center bg-gray container mx-auto">
    <div className="">
      <div className="p-3">
        <Profile/>
        <div className="flex mt-20 justify-center">
          <div className="mx-5 relative">
            <Link className={`nav-link text-sm  ${location.pathname == '/' ? "text-zinc-700":"text-zinc-400"}`} to="/">HOME</Link>
            <AnimatePresence>
              {location.pathname == '/' && 
                <motion.div
                  transition={spring} 
                  className="layout-underline"
                  layoutId="layout-underline"
                />}
            </AnimatePresence>
          </div>
          <div  className="mx-5 relative">
            <Link className={`nav-link text-sm  ${location.pathname == '/writing' ? "text-zinc-700":"text-zinc-400"}`} to="/writing">WRITING</Link>
            {/* {location.pathname == '/writing' && <motion.div transition={spring} className="layout-underline" layoutId="layout-underline" />} */}
            <AnimatePresence>
              {location.pathname == '/writing' && 
                <motion.div
                  transition={spring} 
                  className="layout-underline"
                  layoutId="layout-underline"
                />}
            </AnimatePresence>
          </div>
          <div className="mx-5 relative">
            <Link className={`nav-link text-sm  ${location.pathname == '/about'? "text-zinc-700":"text-zinc-400"}`} to="/about">ABOUT</Link>
            {/* {location.pathname == '/about' && <motion.div transition={spring} className="layout-underline" layoutId="layout-underline" />} */}
            <AnimatePresence>
              {location.pathname == '/about' && 
                <motion.div
                  transition={spring} 
                  className="layout-underline"
                  layoutId="layout-underline"
                />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
}
