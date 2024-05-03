import { motion, AnimatePresence } from "framer-motion"
const spring = {
  type: "spring",
  bounce:.5,
  duration: 0.4
}
export const PresenceMotion = ({ children }) => (
  <AnimatePresence>
      <motion.div
        transition={spring}
        initial={{ opacity: 0, y:30 }}
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0 }}
      >{children}</motion.div>
  </AnimatePresence>
)

export default PresenceMotion