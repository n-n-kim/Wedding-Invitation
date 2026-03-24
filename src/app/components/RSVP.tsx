import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: '1',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        attendance: '',
        guests: '1',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-6 bg-white" id="rsvp">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#345938] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Xác Nhận Tham Dự
          </h2>
          <p className="text-gray-600">
            Vui lòng xác nhận sự có mặt của bạn để chúng tôi có thể chuẩn bị chu đáo hơn
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#EEDFCA]/30 to-[#F3BDCB]/20 rounded-3xl p-8 md:p-10 border border-[#CFD6AD]/30"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 className="w-16 h-16 text-[#CFD6AD] mx-auto mb-4" />
              <h3 className="text-2xl text-[#345938] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cảm ơn bạn!
              </h3>
              <p className="text-gray-700">
                Chúng tôi đã nhận được xác nhận của bạn
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Họ và tên <span className="text-[#F3BDCB]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#CFD6AD]/30 bg-white focus:outline-none focus:border-[#345938] transition-colors"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              {/* Attendance */}
              <div>
                <label htmlFor="attendance" className="block text-sm text-gray-700 mb-2">
                  Trạng thái tham dự <span className="text-[#F3BDCB]">*</span>
                </label>
                <select
                  id="attendance"
                  name="attendance"
                  required
                  value={formData.attendance}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#CFD6AD]/30 bg-white focus:outline-none focus:border-[#345938] transition-colors"
                >
                  <option value="">Chọn trạng thái</option>
                  <option value="yes">Tôi sẽ tham dự</option>
                  <option value="no">Rất tiếc tôi không thể tham dự</option>
                </select>
              </div>

              {/* Number of guests */}
              {formData.attendance === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label htmlFor="guests" className="block text-sm text-gray-700 mb-2">
                    Số lượng người tham dự
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    max="20"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#CFD6AD]/30 bg-white focus:outline-none focus:border-[#345938] transition-colors"
                    placeholder="Nhập số người"
                  />
                </motion.div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Lời nhắn hoặc ghi chú
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#CFD6AD]/30 bg-white focus:outline-none focus:border-[#345938] transition-colors resize-none"
                  placeholder="Gửi lời chúc đến cô dâu chú rể..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-[#345938] text-white rounded-full hover:bg-[#345938]/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Gửi xác nhận</span>
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}