import { ReactElement } from 'react'
import { motion } from 'framer-motion'
import joinClasses from 'classnames'


type ChildrenProps = {
  className?: string,
  children: ReactElement | ReactElement[] | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
}

export const variants = {
  visible: {
    y:0,
    opacity:1,
    transition: {
      type:'spring',
      duration: 0.4,
      bounce: 0.3,
      // when: "beforeChildren",
    }
  },
  hidden: {
    y:-12,
    opacity:0,
    transition: {
      type:'spring',
      duration: 0.4,
      bounce: 0.3,
      // when: "afterChildren",
    },
  }
}
export const chilVariants = {
  visible: {
    y:0,
    opacity:1,
    transition: {
      type:'spring',
      stiffness: 100
    }
  },
  hidden: {
    y:25,
    opacity:0.3, 
    transition: {
      type:'spring',
      stiffness: 100
    }
  },
}
export const Modiv = ({ children, className }:ChildrenProps) => {
  // do not put exit props to staggered children
  return (
    <motion.div className={className} variants={chilVariants}>{children}</motion.div>
  )
}
const Page = ({ children, className }:ChildrenProps) => {
  return (
    <motion.main
      initial={{ y: 12, opacity: 0}}
      animate="visible"
      exit="hidden"
      variants={variants}
      className={
        joinClasses(
          "pt-3 gradient",
          className
        )}>
      {children}
    </motion.main>
  )
}
export default Page