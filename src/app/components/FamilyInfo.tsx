import { motion } from 'motion/react';
import { Users } from 'lucide-react';

export function FamilyInfo() {
  return (
    <section className="py-20 px-6 bg-white" id="family">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center justify-center mb-6"
          >
            <Users className="w-8 h-8 text-[#1C4F7C]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl text-[#1C4F7C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Gia Đình Hai Bên
          </h2>
          <p className="text-gray-600">Trân trọng giới thiệu</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Groom's family */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#EEDFCA]/30 to-white p-8 md:p-10 rounded-3xl border border-[#CFD6AD]/30"
          >
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-[#1C4F7C] text-white rounded-full text-sm mb-4">
                Nhà Trai
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Cha</p>
                <p className="text-xl text-[#1C4F7C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ông ...
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Mẹ</p>
                <p className="text-xl text-[#1C4F7C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Bà ...
                </p>
              </div>

              <div className="pt-4 border-t border-[#CFD6AD]/30">
                <p className="text-sm text-gray-500 mb-2">Địa chỉ</p>
                <p className="text-gray-700 leading-relaxed">
                  ...
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bride's family */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-[#F3BDCB]/20 to-white p-8 md:p-10 rounded-3xl border border-[#F3BDCB]/30"
          >
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-[#F3BDCB] text-[#1C4F7C] rounded-full text-sm mb-4">
                Nhà Gái
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Cha</p>
                <p className="text-xl text-[#1C4F7C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ông ...
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Mẹ</p>
                <p className="text-xl text-[#1C4F7C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Bà ...
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3BDCB]/30">
                <p className="text-sm text-gray-500 mb-2">Địa chỉ</p>
                <p className="text-gray-700 leading-relaxed">
                  ...
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center justify-center"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#CFD6AD] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
