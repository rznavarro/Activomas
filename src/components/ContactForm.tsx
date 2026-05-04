import { motion } from 'motion/react';
import { Send, ShieldCheck, Clock, Target } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Tu primera propiedad de inversión está <span className="text-gold">más cerca</span> de lo que crees.
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Agenda una asesoría gratuita hoy. Sin compromiso, sin letra chica y 100% personalizada a tu realidad financiera.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold">100% confidencial</h4>
                  <p className="text-sm text-white/50">Tus datos están seguros con nosotros.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Clock className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold">Contacto rápido</h4>
                  <p className="text-sm text-white/50">Te llamamos en menos de 24 horas hábiles.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Target className="text-gold" />
                </div>
                <div>
                  <h4 className="font-bold">Cero presión</h4>
                  <p className="text-sm text-white/50">Asesoría educativa, no venta forzada.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-charcoal p-10 lg:p-12 rounded-[3rem] border border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white/50 uppercase tracking-widest mb-2">Nombre completo</label>
                <input 
                   type="text" 
                   className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-all" 
                   placeholder="Ej: Juan Pérez"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-white/50 uppercase tracking-widest mb-2">WhatsApp</label>
                   <input 
                      type="tel" 
                      className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-all" 
                      placeholder="+56 9 ..."
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-white/50 uppercase tracking-widest mb-2">Email</label>
                   <input 
                      type="email" 
                      className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-all" 
                      placeholder="tu@email.com"
                   />
                 </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-white/50 uppercase tracking-widest mb-2">Renta líquida mensual</label>
                <select className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-all appearance-none">
                   <option>Selecciona un rango</option>
                   <option>Bajo $1.200.000</option>
                   <option>$1.200.000 - $1.800.000</option>
                   <option>$1.800.000 - $2.500.000</option>
                   <option>Sobre $2.500.000</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gold-gradient text-dark py-5 rounded-2xl font-black text-xl shadow-2xl flex items-center justify-center gap-3"
              >
                Quiero mi asesoría gratuita
                <Send size={20} />
              </motion.button>
              
              <p className="text-center text-xs text-white/30 italic">
                Al enviar este formulario aceptas nuestra política de privacidad.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
