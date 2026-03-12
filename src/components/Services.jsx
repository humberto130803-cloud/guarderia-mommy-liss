import { motion } from 'framer-motion'
import siteConfig from '../siteConfig'

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${siteConfig.unsplash.services}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B4226]/90 via-[#3D2210]/85 to-[#6B4226]/90" />

      {/* Decorative shapes */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: '#A8B89A', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: '#C47F5A', filter: 'blur(60px)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[#C47F5A] text-2xl mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            Lo que ofrecemos
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Nuestros Servicios
          </h2>
          <p
            className="text-white/75 max-w-xl mx-auto text-base"
            style={{ fontFamily: 'Mulish, sans-serif' }}
          >
            Todo lo que tu hijo necesita en un lugar lleno de amor y cuidado profesional.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#C47F5A]/30 flex items-center justify-center mb-4 group-hover:bg-[#C47F5A]/50 transition-colors">
                <span className="text-3xl">{s.icon}</span>
              </div>
              <h3
                className="text-white font-bold text-lg mb-3"
                style={{ fontFamily: 'Lora, serif' }}
              >
                {s.title}
              </h3>
              <p
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: 'Mulish, sans-serif' }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p
            className="text-white/80 mb-4 text-base"
            style={{ fontFamily: 'Mulish, sans-serif' }}
          >
            ¿Tienes preguntas sobre nuestros servicios?
          </p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#A8B89A] hover:bg-[#7A9B6B] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'Mulish, sans-serif' }}
          >
            Consultar por WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
