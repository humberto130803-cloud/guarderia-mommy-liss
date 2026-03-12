import { motion } from 'framer-motion'
import siteConfig from '../siteConfig'

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
              <img
                src={siteConfig.unsplash.about}
                alt="Cuidadoras con niños en Guardería Mommy Liss"
                className="w-full h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#6B4226]/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-right-6 bg-[#C47F5A] text-white px-6 py-4 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ fontFamily: 'Lora, serif' }}>5★</div>
                <div className="text-sm opacity-90" style={{ fontFamily: 'Mulish, sans-serif' }}>
                  en Google
                </div>
              </div>
            </motion.div>

            {/* Decorative blob */}
            <div
              className="absolute -top-8 -left-8 w-32 h-32 rounded-full -z-10"
              style={{ background: '#A8B89A', opacity: 0.3 }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full -z-10"
              style={{ background: '#C47F5A', opacity: 0.2 }}
            />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[#C47F5A] text-2xl mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
              Nuestra historia
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#6B4226] leading-tight mb-6"
              style={{ fontFamily: 'Lora, serif' }}
            >
              Un lugar que se siente como hogar
            </h2>
            <div className="w-16 h-1 bg-[#A8B89A] rounded-full mb-6" />

            <p
              className="text-[#3D2210]/80 text-base leading-relaxed mb-5"
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              La Guardería Mommy Liss nació del corazón y las manos de <strong>Liss</strong>, una mamá que entendió lo que significa confiar tus hijos a otras personas. Por eso creó un espacio que no es una guardería más — es un verdadero hogar.
            </p>

            <p
              className="text-[#3D2210]/80 text-base leading-relaxed mb-8"
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              Aquí cada niño es recibido con amor genuino, atención personal y el calor de una familia. No somos masivos ni impersonales — somos <em>tus</em> aliados mientras trabajas, sabiendo que tu tesoro más grande está en las mejores manos.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '👶', label: 'Atención personalizada' },
                { icon: '🏡', label: 'Ambiente familiar' },
                { icon: '❤️', label: 'Cuidado con amor' },
                { icon: '🌟', label: 'Calificación perfecta' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span
                    className="text-[#6B4226] font-semibold text-sm"
                    style={{ fontFamily: 'Mulish, sans-serif' }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#A8B89A] hover:bg-[#7A9B6B] text-white px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Mulish, sans-serif' }}
            >
              ¡Visítanos hoy! →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
