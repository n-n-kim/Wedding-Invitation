import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function WeddingSchedule() {
  const events = [
    {
      title: 'Lễ Vu Quy',
      date: 'Thứ ..., ... tháng ... năm 2026',
      lunarDate: 'Ngày ... tháng ... năm ...',
      time: '...thời gian...',
      venue: 'Tư gia nhà gái',
      address: '...địa chỉ...',
      color: 'pink',
    },
    {
      title: 'Lễ Thành Hôn',
      date: 'Thứ Bảy, ... tháng ... năm 2026',
      lunarDate: 'Ngày ... tháng ... năm ...',
      time: '...thời gian...',
      venue: 'Tư gia nhà trai',
      address: '...địa chỉ...',
      color: 'sage',
    },
    {
      title: 'Tiệc Cưới',
      date: 'Thứ bảy, 20 tháng 06 năm 2026',
      lunarDate: 'Ngày 06 tháng 05 năm Ất Sửu',
      time: '18h00',
      venue: 'Callary Wedding & Events - Lầu 5 - Sảnh MAGNOLIA',
      address: '123 Lý Chính Thắng, phương Xuân Hòa, TPHCM',
      mapLink: 'https://share.google/BaifwZgJzdQhNtg53',
      color: 'navy',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#EEDFCA]/20 to-white" id="schedule">
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
            <Calendar className="w-8 h-8 text-[#1C4F7C]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl text-[#1C4F7C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Các Khung Thời Gian
          </h2>
          <p className="text-gray-600">Trân trọng kính mời quý khách tham dự</p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-3xl shadow-lg overflow-hidden border ${
                event.color === 'pink'
                  ? 'border-[#F3BDCB]/30'
                  : event.color === 'sage'
                  ? 'border-[#CFD6AD]/30'
                  : 'border-[#1C4F7C]/30'
              }`}
            >
              {/* Color accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-2 ${
                  event.color === 'pink'
                    ? 'bg-[#F3BDCB]'
                    : event.color === 'sage'
                    ? 'bg-[#CFD6AD]'
                    : 'bg-[#1C4F7C]'
                }`}
              />

              <div className="p-8 md:p-10 pl-10 md:pl-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left: Event details */}
                  <div className="flex-1">
                    <h3
                      className="text-3xl md:text-4xl text-[#1C4F7C] mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {event.title}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">{event.date}</p>
                          <p className="text-sm text-gray-500">{event.lunarDate}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <p className="text-gray-700">{event.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Venue details */}
                  <div className="md:text-right">
                    <div
                      className={`inline-block px-4 py-2 rounded-full text-sm mb-3 ${
                        event.color === 'pink'
                          ? 'bg-[#F3BDCB]/30 text-[#1C4F7C]'
                          : event.color === 'sage'
                          ? 'bg-[#CFD6AD]/30 text-[#1C4F7C]'
                          : 'bg-[#1C4F7C] text-white'
                      }`}
                    >
                      Địa điểm
                    </div>
                    <p className="text-xl text-[#1C4F7C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {event.venue}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-sm md:ml-auto">
                      {event.address}
                    </p>
                    {event.mapLink && (
                      <a
                        href={event.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 leading-relaxed max-w-sm md:ml-auto"
                      >
                        <MapPin className="w-4 h-4 inline-block mr-1" />
                        Xem bản đồ
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}