import { motion } from "framer-motion";
import team1 from "../../assets/bannerIMG/team1.jpg";
import team2 from "../../assets/bannerIMG/team2.jpg";

export const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#3282B8]/10 to-[#0F4C75]/10">
      <div className="container mx-auto py-5 md:py-26">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          {/* Images Section */}
          <div className="flex-1 relative md:h-[500px] hidden md:block">
            <motion.div
              className="absolute -right-4 -top-8 z-10"
              animate={{
                opacity: 1,
                x: [100, 150, 100],
                y: [20, -20, 20],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.img
                src={team1}
                className="md:max-w-sm border-s-8 border-b-8 border-[#3282B8] rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>

            <motion.div
              className="absolute left-0 bottom-0 z-0"
              animate={{
                //   x: [0, -40,0],
                y: [-70, 20, -70],
              }}
              transition={{
                duration: 8,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.img
                src={team2}
                className="max-w-sm border-s-8 border-b-8 border-[#0F4C75] rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Latest{" "}
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#3282B8] to-[#0F4C75]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Jobs
                </motion.span>{" "}
                For You!
              </motion.h1>
              <motion.p
                className="py-6 text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Discover your dream career with our curated job listings. We
                connect talented professionals with top companies worldwide.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(15, 76, 117, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary px-8 py-3 text-lg font-semibold"
                style={{
                  background: "linear-gradient(to right, #3282B8, #0F4C75)",
                }}
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f8fafc",
                }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline px-8 py-3 text-lg font-semibold border-[#3282B8] text-[#3282B8] hover:bg-transparent"
              >
                Browse Jobs
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
