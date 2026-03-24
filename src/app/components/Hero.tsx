import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface HeroProps {
  onOpen: () => void;
}

export function Hero({ onOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1658393990097-6db4ca3c5173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdHVubmVsJTIwbGlnaHQlMjBjZW50ZXIlMjBwZXJzcGVjdGl2ZXxlbnwxfHx8fDE3NzQzNTAyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tunnel with light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F6F2]/80 via-[#F7F6F2]/70 to-[#F7F6F2]/90" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        {/* Decorative element */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="mb-8 flex justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#F3BDCB]/30 flex items-center justify-center">
            <span className="text-4xl text-[#1C4F7C]">囍</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm tracking-[0.3em] uppercase text-[#1C4F7C] mb-6"
        >
          Thư mời tiệc cưới
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-5xl md:text-7xl mb-4 text-[#1C4F7C] relative inline-block px-8 py-6 bg-[#F7F6F2]/30 backdrop-blur-sm rounded-[4rem]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Quốc Tân
          <span className="block text-3xl md:text-4xl my-4 text-[#1C4F7C]">&</span>
          Ngọc Trâm
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 mb-12"
        >
          <p className="text-2xl md:text-3xl text-[#1C4F7C]" style={{ fontFamily: "'Playfair Display', serif" }}>20.06.2026</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="px-8 py-4 bg-[#1C4F7C] text-white rounded-full hover:bg-[#1C4F7C]/90 transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Mở thiệp cưới
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-6 text-sm text-gray-600"
        >
          Nhấn để xem lời mời
        </motion.p>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#CFD6AD]/20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#F3BDCB]/20 blur-3xl"
      />
    </section>
  );
}