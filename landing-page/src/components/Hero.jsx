import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Sync your <span>devices</span> with CtrlV
      </motion.h1>
      <p>Share links, texts and files between your devices seamlessly.</p>
      <center>
        <a href="/">Download</a>
        <small>It's free, seriously</small>
      </center>
    </div>
  );
};

export default Hero;
