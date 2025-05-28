import { color, scale } from "motion";
import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/images/team (1).jpg";
import team2 from "../../assets/images/team (2).jpg";
import { IoBagHandleOutline, IoSearch } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

const Hero = () => {
  // const jobs = use(jobsPromise);
  // console.log(jobs);
  return (
    <div className="hero bg-base-200 rounded-md min-h-96">
      <div className="hero-content flex-col lg:flex-row md:gap-5">
        <div className="flex-1">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 2 },
            }}
            className="text-5xl font-bold"
          >
            The
            <motion.span
              className="px-2"
              animate={{
                color: ["#ffcf33", "#7bff33", "#33ffcc"],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              Easiest Way
            </motion.span>
            to Get Your New Job
          </motion.h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <div className="bg-white flex items-center justify-between p-3 rounded-md">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary><IoBagHandleOutline size={20} />Industry</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>

            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary><MdOutlineLocationOn size={20} />Location</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <button className="btn btn-primary"><IoSearch size={20}></IoSearch>Search</button>
          </div>
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
