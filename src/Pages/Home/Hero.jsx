import { color, scale } from "motion";
import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/images/team (1).jpg";
import team2 from "../../assets/images/team (2).jpg";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 2},
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{
                color: ["#ffcf33", "#7bff33", "#33ffcc"],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              jobs
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="flex-1">
          <motion.img
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 8, repeat: Infinity }}
            src={team1}
            className="max-w-sm border-s-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
          <motion.img
            animate={{ x: [140, 190, 140] }}
            transition={{ duration: 14, delay: 5, repeat: Infinity }}
            src={team2}
            className="max-w-sm border-s-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
