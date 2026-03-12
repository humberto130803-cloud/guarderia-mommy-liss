import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import siteConfig from '../siteConfig'

function FAQItem({ q, a, idx }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="border border-[#E8D5B7] rounded-2xl overflow-hidden bg-[#FAF7F2]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span
          className="text-[#6B4226] font-semibold text-base"
          style={{ fontFamily: 'Mulish, sans-serif' }}
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-[#C47F5A]"
        >
          <FiChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 pb-5">
              <div className="h-px bg-[#E8D5B7] mb-4" />
              <p
                className="text-[#3D2210]/75 text-sm leading-relaxed"
                style={{ fontFamily: 'Mulish, sans-serif' }}
              >
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#C47F5A] text-2xl mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            Resolvemos tus dudas
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#6B4226]"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Preguntas Frecuentes
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {siteConfig.faq.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} idx={i} />
          ))}
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p
            className="text-[#6B4226]/70 mb-4"
            style={{ fontFamily: 'Mulish, sans-serif' }}
          >
            ¿Tienes más preguntas? ¡Escríbenos!
          </p>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C47F5A] hover:bg-[#A86B45] text-white px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'Mulish, sans-serif' }}
          >
            Preguntar por WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
