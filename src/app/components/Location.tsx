import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export function Location() {
  const handleDirections = () => {
    // In a real app, this would open Google Maps
    window.open(
      'https://share.google/BaifwZgJzdQhNtg53',
      '_blank'
    );
  };

  return (
    <section className="py-20 px-6 bg-white" id="location">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center justify-center mb-6"
          >
            <MapPin className="w-8 h-8 text-[#345938]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl text-[#345938] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Địa Điểm Tổ Chức
          </h2>
          <p className="text-gray-600">Tiệc cưới chính</p>
        </div>

        <div className="bg-gradient-to-br from-[#EEDFCA]/30 to-[#F3BDCB]/20 rounded-3xl overflow-hidden border border-[#CFD6AD]/30">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-video bg-gradient-to-br from-[#CFD6AD]/20 to-[#F3BDCB]/20 relative overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1769812343890-4e406a33cfbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBlbGVnYW50JTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzQyNzM0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Wedding venue"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-[#345938] rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" fill="white" />
              </div>
            </div>
          </motion.div>

          {/* Location details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 md:p-10"
          >
            <h3
              className="text-3xl md:text-4xl text-[#345938] mb-4 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Callary Wedding & Events
            </h3>

            <p className="text-center text-gray-700 mb-8 leading-relaxed">
              Lầu 5 - Sảnh MAGNOLIA<br />
              123 Lý Chính Thắng, phương Xuân Hòa, TPHCM
            </p>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDirections}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#345938] text-white rounded-full hover:bg-[#345938]/90 transition-colors shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                <span>Xem chỉ đường</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}