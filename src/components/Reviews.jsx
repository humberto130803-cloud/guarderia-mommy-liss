import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import siteConfig from '../siteConfig'

export default function Reviews() {
  return (
    <section id="resenas" className="py-24 bg-[#F5EDD6]">
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
            Lo que dicen los papás
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#6B4226] mb-4"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Reseñas de Familias
          </h2>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="text-[#C47F5A] fill-[#C47F5A]" size={20} />
            ))}
            <span
              className="text-[#6B4226] font-bold text-xl ml-1"
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              5.0
            </span>
            <span
              className="text-[#6B4226]/60 text-sm"
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              en Google Reviews
            </span>
          </div>
        </motion.div>

        {/* Review cards + highlight */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Main review */}
          {siteConfig.reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#E8D5B7] shadow-sm relative"
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 right-6 text-6xl text-[#C47F5A]/20 font-serif leading-none"
                style={{ fontFamily: 'Lora, serif' }}
              >
                "
              </div>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(r.stars)].map((_, j) => (
                  <FiStar key={j} className="text-[#C47F5A] fill-[#C47F5A]" size={16} />
                ))}
              </div>
              <p
                className="text-[#3D2210] text-base leading-relaxed mb-6 italic"
                style={{ fontFamily: 'Lora, serif' }}
              >
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C47F5A] flex items-center justify-center text-white font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="text-[#6B4226] font-bold text-sm"
                    style={{ fontFamily: 'Mulish, sans-serif' }}
                  >
                    {r.name}
                  </p>
                  <p
                    className="text-[#6B4226]/60 text-xs"
                    style={{ fontFamily: 'Mulish, sans-serif' }}
                  >
                    Papá satisfecho ✓
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Rating highlight card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#C47F5A] rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center"
          >
            <div className="text-7xl font-bold mb-2" style={{ fontFamily: 'Lora, serif' }}>5.0</div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-white fill-white" size={18} />
              ))}
            </div>
            <p
              className="text-white/90 text-sm font-medium"
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              Calificación perfecta en Google
            </p>
            <div className="mt-6 w-full h-px bg-white/30" />
            <p
              className="mt-4 text-white/80 text-sm"
              style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem' }}
            >
              "Cuidan de tu hijo como si fuera de ellos"
            </p>
          </motion.div>

          {/* Trust card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#A8B89A] rounded-3xl p-8 text-white flex flex-col justify-between"
          >
            <div>
              <p
                className="text-4xl mb-4"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                ¿Listo para conocernos?
              </p>
              <p
                className="text-white/90 text-sm leading-relaxed mb-6"
                style={{ fontFamily: 'Mulish, sans-serif' }}
              >
                Visítanos o escríbenos hoy. Los cupos son limitados para garantizar la mejor atención.
              </p>
            </div>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#6B4226] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#FAF7F2] transition-colors text-center"
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              Reservar mi visita →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
