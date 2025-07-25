import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Particles from './Particles';

const inputVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
      delay: i * 0.15,
      duration: 0.8,
    },
  }),
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <section
      id="contact"
      ref={ref}
      className="flex flex-col items-center justify-center px-4 md:px-12 py-20 bg-primary text-white min-h-[500px] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={300}
              particleSpread={10}
              speed={0.2}
              particleBaseSize={80}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
      </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center w-full md:w-1/2 z-10">
        <h2 className="text-3xl font-bold text-secondary mb-8">Contact Me</h2>
        <motion.form
          className="max-w-xl w-full space-y-6 p-6 bg-surface/60 rounded-xl"
          initial="hidden"
          animate={controls}
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded border border-gray-900 bg-surface text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
            custom={0}
            variants={inputVariants}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-900 bg-surface text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
            custom={1}
            variants={inputVariants}
          />
          <motion.textarea
            placeholder="Your Message"
            className="w-full p-3 rounded border border-gray-900 bg-surface text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent"
            rows={5}
            custom={2}
            variants={inputVariants}
          />
          <motion.button
            type="submit"
            className="border-2 bg-transparent text-white px-6 py-3 rounded-2xl font-bold transition-all duration-100 hover:bg-white hover:text-black"
            custom={3}
            variants={inputVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 group-hover:bg-clip-text group-hover:text-transparent group-hover:font-bold group-hover:tracking-wide group-hover:shadow-none group-hover:drop-shadow-none group-hover:filter-none group-hover:outline-none group-hover:border-none group-hover:focus:outline-none group-hover:focus:ring-0">
              Send
            </span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;