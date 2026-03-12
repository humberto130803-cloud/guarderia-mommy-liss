import { motion } from 'framer-motion'
import siteConfig from '../siteConfig'

export default function TrustBar() {
  return (
    <section className="bg-[#6B4226] py-14 overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[#C47F5A] text-xl mb-1" style={{ fontFamily: 'Caveat, cursive' }}>
            ¿Por qué elegirnos?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Lora, serif' }}>
            Valores que nos definen
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteConfig.values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#C47F5A]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C47F5A]/40 transition-colors">
                <span className="text-3xl">{v.icon}</span>
              </div>
              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: 'Lora, serif' }}
              >
                {v.title}
              </h3>
              <p
                className="text-white/70 text-sm leading-relaxed"
                style={{ fontFamily: 'Mulish, sans-serif' }}
              >
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
