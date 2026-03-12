import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMessageCircle, FiClock } from 'react-icons/fi'
import siteConfig from '../siteConfig'

export default function Location() {
  return (
    <section id="contacto" className="py-24 bg-[#F5EDD6]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[#C47F5A] text-2xl mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            ¿Cómo llegar?
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#6B4226]"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Nuestra Ubicación
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Address */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8D5B7] flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#C47F5A]/15 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-[#C47F5A]" size={20} />
              </div>
              <div>
                <p
                  className="text-[#6B4226] font-bold text-base mb-1"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  Dirección
                </p>
                <p
                  className="text-[#3D2210]/70 text-sm"
                  style={{ fontFamily: 'Mulish, sans-serif' }}
                >
                  {siteConfig.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8D5B7] flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#A8B89A]/25 flex items-center justify-center flex-shrink-0">
                <FiPhone className="text-[#7A9B6B]" size={20} />
              </div>
              <div>
                <p
                  className="text-[#6B4226] font-bold text-base mb-1"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  Teléfono
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-[#3D2210]/70 text-sm hover:text-[#C47F5A] transition-colors"
                  style={{ fontFamily: 'Mulish, sans-serif' }}
                >
                  {siteConfig.phoneFormatted}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8D5B7] flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                <FiMessageCircle className="text-[#25D366]" size={20} />
              </div>
              <div>
                <p
                  className="text-[#6B4226] font-bold text-base mb-1"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  WhatsApp
                </p>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-semibold text-sm hover:underline"
                  style={{ fontFamily: 'Mulish, sans-serif' }}
                >
                  Enviar mensaje →
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8D5B7] flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-[#C47F5A]/15 flex items-center justify-center flex-shrink-0">
                <FiClock className="text-[#C47F5A]" size={20} />
              </div>
              <div>
                <p
                  className="text-[#6B4226] font-bold text-base mb-2"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  Horario
                </p>
                <p
                  className="text-[#3D2210]/70 text-sm"
                  style={{ fontFamily: 'Mulish, sans-serif' }}
                >
                  Horario flexible para papás trabajadores.
                  <br />
                  <span className="text-[#C47F5A] font-semibold">
                    ¡Consúltanos por WhatsApp!
                  </span>
                </p>
              </div>
            </div>

            {/* Big WhatsApp CTA */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1FAD58] text-white py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-md"
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              ¡Escríbenos por WhatsApp!
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-[#E8D5B7] shadow-md h-[500px] bg-[#E8D5B7] flex items-center justify-center"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7882.97541395701!2d-79.53504847155648!3d8.990699399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f7fac94abd%3A0xccc3b6b1a8f7e879!2sCalle%20C%C3%A1diz%2C%20Panama!5e0!3m2!1ses!2spa!4v1741788000000!5m2!1ses!2spa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Guardería Mommy Liss"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
