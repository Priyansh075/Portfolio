import { motion } from 'framer-motion';

const skills = {
  Languages: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "C", "C++", "MATLAB"],
  Frameworks: ["React", "Node.js", "Express", "Tailwind", "Three.js"],
  Tools: ["Git", "Figma", "VSCode"],
};

const backgrounds = {
  Languages: 'bg-[#3b2f23]', // dark earthy brown
  Frameworks: 'bg-[#2d3b2f]', // dark olive/green
  Tools: 'bg-gray-900',
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: i * 0.1,
      duration: 0.7,
      type: 'spring',
      bounce: 0.3,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.7 } },
};

const Skills = () => (
  <section id="skills" className="px-8 py-20 bg-background text-white">
    <h2 className="text-3xl font-bold text-secondary mb-8">Skills</h2>
    <div className="flex flex-col md:flex-row gap-8">
      {Object.entries(skills).map(([category, skillList], i) => (
        <motion.div
          key={category}
          className={`flex-1 rounded-xl p-6 flex flex-col items-center relative overflow-hidden ${backgrounds[category]}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={i}
        >
          <h3 className="text-xl font-bold mb-4 text-accent tracking-wider z-10">{category}</h3>
          <div className="flex flex-col gap-4 w-full z-10">
            {skillList.map((skill, j) => (
              <motion.div
                key={skill}
                className="flex items-center gap-4 p-3 rounded-lg bg-background/80 hover:bg-accent/20 transition-colors duration-300 shadow"
                variants={itemVariants}
              >
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-xl font-bold">
                  {skill[0]}
                </div>
                <span className="text-lg font-semibold tracking-wide">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills; 