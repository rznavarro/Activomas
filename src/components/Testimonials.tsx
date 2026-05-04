import { motion } from 'motion/react';
import { Play, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rodrigo Fuentes",
      city: "Antofagasta",
      properties: "3 propiedades",
      text: "Empecé con dudas por el pie, pero con la asesoría entendí que era posible pagar en cuotas. Hoy mis 3 departamentos se pagan solos y me dan una tranquilidad que antes no tenía.",
      img: "https://i.pravatar.cc/150?u=rod",
      hasVideo: true
    },
    {
      name: "Catalina Muñoz",
      city: "Santiago",
      properties: "1 propiedad",
      text: "Buscaba asegurar mi propia jubilación sin depender de la AFP. El diagnósitico financiero fue clave para dar el paso con confianza.",
      img: "https://i.pravatar.cc/150?u=cat",
      hasVideo: false
    },
    {
      name: "Sebastián Reyes",
      city: "Concepción",
      properties: "5 propiedades",
      text: "Activo Más no solo te vende el depto, te enseña a ser inversionista. El equipo legal y comercial me quitó todo el peso de los trámites de encima.",
      img: "https://i.pravatar.cc/150?u=seb",
      hasVideo: true
    },
    {
      name: "Andrea Lagos",
      city: "Viña del Mar",
      properties: "2 propiedades",
      text: "Como madre, mi prioridad es el patrimonio de mis hijos. Saber que ya tienen estos activos a su nombre es la mejor decisión que he tomado.",
      img: "https://i.pravatar.cc/150?u=and",
      hasVideo: false
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Más de 3.000 historias reales.</h2>
          <p className="text-white/50 text-lg">Personas que ya tomaron el control de su futuro financiero.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-charcoal p-8 rounded-3xl border border-white/5 flex gap-6 relative group"
            >
              <div className="flex-shrink-0 relative">
                <img src={testimonial.img} className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={testimonial.name} />
                {testimonial.hasVideo && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-lg">
                    <Play size={12} className="fill-dark text-dark ml-0.5" />
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-gold fill-gold" />)}
                </div>
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">{testimonial.city} • {testimonial.properties}</p>
                <p className="text-white/70 italic leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
            Ver todos los testimonios en video
          </button>
        </div>
      </div>
    </section>
  );
}
