import { motion } from 'motion/react';
import { Gift as GiftIcon, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Gift() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankAccounts = [
    {
      title: 'Nhà Trai',
      bank: '...ngân hàng...',
      accountNumber: '1234567890',
      accountName: 'TRINH QUOC TAN',
      qrCode: 'https://via.placeholder.com/200x200?text=QR+Code',
    },
    {
      title: 'Nhà Gái',
      bank: '...ngân hàng...',
      accountNumber: '1234567890',
      accountName: 'TRAN NGOC TRAM',
      qrCode: 'https://via.placeholder.com/200x200?text=QR+Code',
    },
  ];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#EEDFCA]/20 to-white" id="gift">
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
            <GiftIcon className="w-8 h-8 text-[#345938]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl text-[#345938] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mừng Cưới
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sự hiện diện của quý khách là món quà quý giá nhất với chúng tôi.
            <br />
            Tuy nhiên, nếu bạn muốn gửi lời chúc bằng một món quà nhỏ, chúng tôi xin trân trọng cảm ơn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {bankAccounts.map((account, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#CFD6AD]/30"
            >
              {/* Title badge */}
              <div className="text-center mb-6">
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm ${
                    index === 0
                      ? 'bg-[#1C4F7C] text-white'
                      : 'bg-[#F3BDCB] text-[#345938]'
                  }`}
                >
                  {account.title}
                </div>
              </div>

              {/* QR Code placeholder */}
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 bg-gradient-to-br from-[#EEDFCA]/30 to-[#F3BDCB]/20 rounded-2xl flex items-center justify-center border border-[#CFD6AD]/30">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-white rounded-xl mb-2 flex items-center justify-center">
                      <span className="text-xs text-gray-400">QR Code</span>
                    </div>
                    <p className="text-xs text-gray-500">Quét mã để chuyển khoản</p>
                  </div>
                </div>
              </div>

              {/* Bank info */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Ngân hàng</p>
                  <p className="text-lg text-[#345938]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {account.bank}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Số tài khoản</p>
                  <div className="flex items-center justify-between bg-[#EEDFCA]/30 rounded-xl px-4 py-3">
                    <p className="text-lg text-[#345938]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {account.accountNumber}
                    </p>
                    <button
                      onClick={() => copyToClipboard(account.accountNumber, `account-${index}`)}
                      className="ml-2 p-2 hover:bg-white rounded-lg transition-colors"
                      title="Copy"
                    >
                      {copiedField === `account-${index}` ? (
                        <Check className="w-5 h-5 text-[#CFD6AD]" />
                      ) : (
                        <Copy className="w-5 h-5 text-[#345938]" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Chủ tài khoản</p>
                  <div className="flex items-center justify-between bg-[#EEDFCA]/30 rounded-xl px-4 py-3">
                    <p className="text-lg text-[#345938]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {account.accountName}
                    </p>
                    <button
                      onClick={() => copyToClipboard(account.accountName, `name-${index}`)}
                      className="ml-2 p-2 hover:bg-white rounded-lg transition-colors"
                      title="Copy"
                    >
                      {copiedField === `name-${index}` ? (
                        <Check className="w-5 h-5 text-[#CFD6AD]" />
                      ) : (
                        <Copy className="w-5 h-5 text-[#345938]" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mọi tấm lòng của bạn đều được chúng tôi trân trọng và ghi nhận
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}