import { motion } from 'motion/react';

interface PersonalInvitationProps {
  guestName?: string;
}

export function PersonalInvitation({ guestName }: PersonalInvitationProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-white" id="invitation">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Decorative line */}
        <div className="mb-8 flex items-center justify-center">
          <div className="h-px w-16 bg-[#CFD6AD]" />
          <div className="mx-4 w-2 h-2 rounded-full bg-[#F3BDCB]" />
          <div className="h-px w-16 bg-[#CFD6AD]" />
        </div>

        <p className="text-sm tracking-[0.2em] uppercase text-[#1C4F7C] mb-8">
          Trân trọng kính mời
        </p>

        {guestName && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12 p-8 bg-gradient-to-br from-[#EEDFCA]/30 to-[#F3BDCB]/20 rounded-2xl border border-[#CFD6AD]/30"
          >
            <p className="text-3xl md:text-4xl text-[#1C4F7C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              {guestName}
            </p>
          </motion.div>
        )}

        <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
          <p className="mb-6">
            Với niềm vui và hạnh phúc vô bờ, chúng tôi trân trọng kính mời {guestName || 'quý khách'} đến dự
            buổi lễ thành hôn của chúng tôi.
          </p>
          <p className="mb-6">
            Sự hiện diện của {guestName ? 'bạn' : 'quý khách'} sẽ là niềm vinh hạnh và nguồn động viên lớn lao
            cho chúng tôi trong ngày trọng đại này.
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-12 flex items-center justify-center">
          <div className="h-px w-16 bg-[#CFD6AD]" />
          <div className="mx-4 w-2 h-2 rounded-full bg-[#F3BDCB]" />
          <div className="h-px w-16 bg-[#CFD6AD]" />
        </div>
      </motion.div>
    </section>
  );
}