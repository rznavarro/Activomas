import { motion } from 'motion/react';
import { Play, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rodrigo Fuentes",
      city: "Antofagasta",
      properties: "3 Propiedades",
      text: "La asesoría superó mis expectativas. Entendí que la inversión en activos inmobiliarios de alto perfil es el único camino real hacia la libertad financiera sin comprometer mi tiempo.",
      img: "https://i.pravatar.cc/150?u=rod",
      hasVideo: true
    },
    {
      name: "Catalina Muñoz",
      city: "Santiago",
      properties: "Elite Member",
      text: "Buscaba blindar mi futuro. El diagnóstico patrimonial me permitió seleccionar activos exclusivos que ya están generando plusvalía sobre el promedio del mercado.",
      img: "https://i.pravatar.cc/150?u=cat",
      hasVideo: false
    }
  ];

  return (
    <section id="testimonios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h4 className="text-luxury-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Legacy & Testimonios</h4>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-navy mb-6">Historias de Éxito Real</h2>
          <p className="text-navy/70 text-base italic font-serif">Inversionistas que han elevado su estándar de vida y patrimonial.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="editorial-card p-10 lg:p-12 rounded-[3rem] relative group border-stone/30"
            >
              <Quote className="absolute top-8 right-8 text-stone/20" size={48} />
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10 text-center md:text-left">
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-stone/20">
                    <img src={testimonial.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={testimonial.name} />
                  </div>
                  {testimonial.hasVideo && (
                    <div className="absolute -bottom-1 right-1 w-8 h-8 bg-vibrant-green rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <Play size={12} className="fill-white text-white ml-0.5" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-luxury-gold fill-luxury-gold" />)}
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-navy mb-1">{testimonial.name}</h4>
                  <p className="text-luxury-gold text-[9px] font-black uppercase tracking-[0.2em] mb-4">{testimonial.city} • {testimonial.properties}</p>
                  <p className="text-navy/80 italic leading-relaxed text-base font-serif">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-navy font-bold flex items-center mx-auto hover:text-luxury-gold transition-colors group uppercase tracking-widest text-[10px] border-b-2 border-luxury-gold pb-2"
          >
            VER TODAS LAS SESIONES EN VIDEO
          </motion.button>
        </div>
      </div>
    </section>
  );
}
