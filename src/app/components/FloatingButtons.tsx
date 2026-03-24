import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Music, ArrowUp, Play, Pause } from 'lucide-react';
import musicFile from '../../assets/music.mp3';

export function FloatingButtons() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(musicFile);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.error('Error playing audio:', error);
          });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="w-14 h-14 bg-[#1C4F7C] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center relative"
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        <Music className="w-6 h-6" />
        {isPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Pause className="w-4 h-4 absolute" />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-4 h-4 absolute ml-0.5" />
          </div>
        )}
      </motion.button>

      {showScrollTop && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-14 h-14 bg-[#F3BDCB] text-[#1C4F7C] rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
          title="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

      {isPlaying && (
        <motion.div
          className="absolute top-0 right-0 w-14 h-14 pointer-events-none"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-full h-full bg-[#1C4F7C] rounded-full" />
        </motion.div>
      )}
    </div>
  );
}