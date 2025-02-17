import { motion } from "framer-motion";

export const sentenceVariants = {
  hidden: {},
  visible: (speed) => ({
    opacity: 1,
    transition: { 
      staggerChildren: speed,
    }
  })
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};

export const Typewriter = ({ text, speed = 0.1, ...rest }) => (
  <motion.p
    key={text}
    custom={speed}
    variants={sentenceVariants}
    initial="hidden"
    animate="visible"
    {...rest}
  >
    {text.split("").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
    <motion.span
      className="blinking-cursor"
      variants={letterVariants}
    >
      _
    </motion.span>
  </motion.p>
);
