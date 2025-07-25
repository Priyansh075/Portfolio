import { useEffect, useRef, useState } from 'react';
import SplitText from './SplitText';
import Model from './Model';
import MagnetLines from './MagnetLines';

const rotatingTexts = [
  'Web Developer',
  'React Enthusiast',
  'Competitive Programmer',
  'Mechanical Undergrad Student',
];

const About = () => {
  const aboutRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = aboutRef.current.offsetTop;
      const scrollPosition = window.scrollY;
      if (scrollPosition >= aboutTop - 100) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="relative flex flex-col md:flex-row items-center justify-between px-8 py-20 gap-12 bg-background overflow-hidden min-h-[500px]">
      {/* 3D Model as background for md+ */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <MagnetLines
          rows={11}
          columns={12}
          containerSize="100vmin"
          lineColor="tomato"
          lineWidth="0.4vmin"
          lineHeight="3vmin"
          baseAngle={0}
          style={{ margin: "0 auto", width: "100%" }}
          canvasSize={{ width: 100, height: 100 }}
        />
      </div>
      <div className="hidden md:block absolute inset-0 w-full h-full z-10">
        <Model />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="flex-1 space-y-6 relative z-20" ref={aboutRef}>
        <SplitText
          text="Hi, I am Priyansh Dhurwey"
          className="text-6xl md:text-4xl lg:text-5xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          animate={animate}
        />
        <div className="text-6xl md:text-4xl lg:text-5xl font-semibold flex items-center gap-3">
          <span className="text-highlight">I'm a</span>
          <span className="rotating-text text-accent inline-block align-middle"></span>
        </div>
      </div>
      {/* 3D Model removed for mobile */}
    </section>
  );
};

export default About;