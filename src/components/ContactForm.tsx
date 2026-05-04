import { motion } from 'motion/react';
import { Send, ShieldCheck, Clock, Target } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contacto" className="py-32 bg-cream relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-navy">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h4 className="text-luxury-gold font-bold text-xs uppercase tracking-[0.4em] mb-4">Privacidad & Elite</h4>
            <h2 className="text-4xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
              Su Legado Comienza con una <span className="italic text-luxury-gold">Conversación.</span>
            </h2>
            <p className="text-xl text-navy/60 mb-12 italic font-serif leading-relaxed">
              Descubra por qué los perfiles más exigentes de Chile confían en nuestro diagnóstico patrimonial exclusivo.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-luxury-gold">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl">Protocolo de Confidencialidad</h4>
                  <p className="text-sm text-navy/40 uppercase tracking-widest font-bold">Resguardo absoluto de sus datos</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-luxury-gold">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl">Sesión de Alta Prioridad</h4>
                  <p className="text-sm text-navy/40 uppercase tracking-widest font-bold">Respuesta en menos de 12 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-luxury-gold">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl">Enfoque Consultivo</h4>
                  <p className="text-sm text-navy/40 uppercase tracking-widest font-bold">Diagnóstico sin presión comercial</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="editorial-card p-12 lg:p-16 rounded-[4rem] border-stone/50 shadow-2xl bg-white"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] mb-3">Nombre Completo</label>
                  <input 
                     type="text" 
                     className="w-full bg-cream border-b border-stone focus:border-luxury-gold outline-none py-4 transition-all text-navy font-serif" 
                     placeholder="Ej: Rodrigo Fuentes"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] mb-3">Relación Patrimonial</label>
                  <select className="w-full bg-cream border-b border-stone focus:border-luxury-gold outline-none py-4 transition-all text-navy font-serif appearance-none">
                     <option>Inversionista Nuevo</option>
                     <option>Portafolio Existente</option>
                     <option>Búsqueda de Segunda Vivienda</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                 <div>
                   <label className="block text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] mb-3">WhatsApp de Contacto</label>
                   <input 
                      type="tel" 
                      className="w-full bg-cream border-b border-stone focus:border-luxury-gold outline-none py-4 transition-all text-navy font-serif" 
                      placeholder="+56 9 ..."
                   />
                 </div>
                 <div>
                   <label className="block text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] mb-3">Email Institucional</label>
                   <input 
                      type="email" 
                      className="w-full bg-cream border-b border-stone focus:border-luxury-gold outline-none py-4 transition-all text-navy font-serif" 
                      placeholder="r.fuentes@empresa.cl"
                   />
                 </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-navy/40 uppercase tracking-[0.2em] mb-3">Rango de Capital Sugerido</label>
                <select className="w-full bg-cream border-b border-stone focus:border-luxury-gold outline-none py-4 transition-all text-navy font-serif appearance-none">
                   <option>Seleccione su capacidad estimada</option>
                   <option>Renta $1.5M - $2.5M</option>
                   <option>Renta $2.5M - $5.0M</option>
                   <option>Sobre $5.0M Líquido</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full py-6 text-xl shadow-xl"
              >
                SOLICITAR DIAGNÓSTICO PRIVADO
              </motion.button>
              
              <p className="text-center text-[10px] text-navy/30 italic uppercase tracking-widest font-black">
                Tratamiento de Datos bajo Estrictos Estándares de Privacidad
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
