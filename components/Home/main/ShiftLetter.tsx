import { motion } from "framer-motion";

const ShiftLetter = ({ letter }:any) => {
    return (
      <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
        <motion.span
          className="flex flex-col min-w-[4px]"
          style={{
            y: "0%",
          }}
          variants={{
            hover: {
              y: "-50%",
            },
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <span>{letter}</span>
          <span>{letter}</span>
        </motion.span>
      </div>
    );
};

  export default ShiftLetter