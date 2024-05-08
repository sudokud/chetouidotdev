import { ReactElement } from 'react'
import { easeOut, motion } from 'framer-motion'
import joinClasses from 'classnames'


type ChildrenProps = {
  className?: string,
  children: ReactElement | ReactElement[] | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
}
const transition = 'opacity .32s cubic-bezier(.4,0,.6,1) 80ms,visibility .32s step-end 80ms'

export const variants = {
  visible: {
    y:0,
    opacity:1,
    transition: {
      type:'tween',
      ease:[.4,0,.6,1],
      duration:0.35,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  hidden: {
    y:30,
    opacity:0,
    transition: {
      type:'tween',
      ease:[.4,0,.6,1],
      duration:0.35,
      when: "afterChildren",
    },
  }
}
export const chilVariants = {
  visible: {
    y:0,
    opacity:1,
    transition: {
      type:'spring'
    }
  },
  hidden: {
    y:25,
    opacity:0, 
    transition: {
      type:'spring'
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
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      className={
        joinClasses(
          "relative p-8 pb-4 px-2.5 lg:px-0",
          className
        )}>
      {children}
    </motion.main>
  )
}
export default Page