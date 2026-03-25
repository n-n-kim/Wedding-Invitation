import { motion } from 'motion/react';
import { Calendar, Clock, Heart } from 'lucide-react';

export function WeddingSchedule() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-[#EEDFCA]/10 to-white relative overflow-hidden" id="schedule">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#345938]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#EEDFCA]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative"
      >
        {/* Header */}
        <div className="text-center mb-16">
          {/* <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 1 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <Heart className="w-12 h-12 text-[#345938] fill-[#345938]/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>囍</span>
              </div>
            </div>
          </motion.div> */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-[#345938] mb-4" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lễ Thành Hôn
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600"
          >
            Trân trọng kính mời quý khách tham dự
          </motion.p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl shadow-[#345938]/10 border border-[#EEDFCA]/50 overflow-hidden"
        >
          {/* Decorative Top Border */}
          
          
          <div className="p-8 md:p-12">
            {/* Date & Time Section */}
            <div className="max-w-md mx-auto space-y-8">
              {/* Date */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#EEDFCA]/20 to-transparent border border-[#EEDFCA]/30"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#345938] flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-lg text-gray-800 font-medium">Thứ bảy, 20 tháng 06 năm 2026</p>
                  <p className="text-sm text-gray-500 mt-1">Ngày 06 tháng 05 năm Ất Sửu</p>
                </div>
              </motion.div>

              {/* Time */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#345938]/5 to-transparent border border-[#345938]/20"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EEDFCA] flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-[#345938]" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-lg text-gray-800 font-medium">Đón khách: 18h00</p>
                  <p className="text-sm text-gray-500 mt-1">Làm lễ: 19h00</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Bottom Border */}
          
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-500 italic">Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
