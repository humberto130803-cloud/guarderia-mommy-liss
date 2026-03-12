import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import siteConfig from '../siteConfig'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${siteConfig.unsplash.hero}')` }}
      />
      {/* Warm organic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B4226]/80 via-[#C47F5A]/50 to-[#A8B89A]/40" />
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FAF7F2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Blob decorations */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-20"
        style={{ background: '#A8B89A', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full opacity-25"
        style={{ background: '#C47F5A', filter: 'blur(60px)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        {/* Stars badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-1 mb-6"
        >
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="text-[#F5EDD6] fill-[#F5EDD6]" size={14} />
            ))}
            <span className="text-white text-sm ml-1 font-semibold" style={{ fontFamily: 'Mulish, sans-serif' }}>
              5.0 en Google
            </span>
          </div>
        </motion.div>

        {/* Accent script */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#F5EDD6] text-2xl md:text-3xl mb-3"
          style={{ fontFamily: 'Caveat, cursive' }}
        >
          Bienvenidos a
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: 'Lora, serif' }}
        >
          Guardería <br />
          <em className="not-italic" style={{ color: '#F5EDD6' }}>Mommy Liss</em>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/90 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light"
          style={{ fontFamily: 'Mulish, sans-serif' }}
        >
          Un hogar lleno de amor, seguridad y confianza para tu pequeño en Panamá.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#A8B89A] hover:bg-[#7A9B6B] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            style={{ fontFamily: 'Mulish, sans-serif' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            ¡Escríbenos por WhatsApp!
          </a>
          <a
            href="#nosotros"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/40 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
            style={{ fontFamily: 'Mulish, sans-serif' }}
          >
            Conócenos →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  )
}
