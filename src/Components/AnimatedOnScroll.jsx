// components/AnimatedOnScroll.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedOnScroll = ({ children, delay = 0, direction = 'up' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
