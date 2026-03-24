import { motion } from 'motion/react';
import { Heart, Music, Play, Pause } from 'lucide-react';
import { useState } from 'react';

export function CoupleIntro() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control actual audio playback
  };

  return (
    <section className="py-20 px-6 bg-[#EEDFCA]/30" id="couple">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Main couple section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center mb-8"
          >
            <div className="text-5xl md:text-7xl" style={{ fontFamily: "'Great Vibes', cursive" }}>
              <span className="text-[#1C4F7C]">Trịnh Quốc Tân</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="my-8 flex items-center justify-center"
          >
            <div className="h-px w-20 bg-[#CFD6AD]" />
            <div className="mx-6">
              <span className="text-5xl text-[#F3BDCB] font-bold">囍</span>
            </div>
            <div className="h-px w-20 bg-[#CFD6AD]" />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="text-5xl md:text-7xl" style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            <span className="text-[#1C4F7C]">Trần Ngọc Trâm</span>
          </motion.div>
        </div>

        {/* Couple image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1593695961839-b2684d6030cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwY2FydG9vbiUyMGNvbG9yZnVsJTIwaWxsdXN0cmF0aW9uJTIwYW5pbWF0ZWR8ZW58MXx8fHwxNzc0MzUxMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Couple"
            className="w-full aspect-[4/3] object-cover"
          />
        </motion.div>

        {/* Music control
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <button
            onClick={toggleMusic}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow border border-[#CFD6AD]/30"
          >
            <Music className="w-5 h-5 text-[#1C4F7C]" />
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 text-[#1C4F7C]" />
                <span className="text-sm text-[#1C4F7C]">Tạm dừng nhạc</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-[#1C4F7C]" />
                <span className="text-sm text-[#1C4F7C]">Phát nhạc nền</span>
              </>
            )}
          </button>
        </motion.div> */}

        {/* Quote or description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
            "Tình yêu không phải là việc nhìn nhau, mà là cùng nhau nhìn về một hướng"
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}