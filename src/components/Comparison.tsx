import { motion } from 'motion/react';
import { Check, AlertTriangle, X } from 'lucide-react';

export default function Comparison() {
  const rows = [
    { 
      label: "Rentabilidad real", 
      activo: "Alta (UF + 4-6%)", 
      afp: "Variable", 
      banco: "Baja (0.5 - 2%)" 
    },
    { 
      label: "Control sobre el activo", 
      activo: "Total y tangible", 
      afp: "Nulo antes de los 65", 
      banco: "Moderado" 
    },
    { 
      label: "Protección vs Inflación", 
      activo: "Natural (vives en UF)", 
      afp: "Parcial", 
      banco: "Moderada" 
    },
    { 
      label: "Legado Familiar", 
      activo: "Propiedad completa", 
      afp: "Solo saldo restante", 
      banco: "Saldo cuenta" 
    },
    { 
      label: "Renta mensual pasiva", 
      activo: "Mensual garantizada", 
      afp: "Solo tras jubilación", 
      banco: "Interés marginal" 
    }
  ];

  return (
    <section className="py-32 bg-stone/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h4 className="text-luxury-gold font-bold text-xs uppercase tracking-[0.4em] mb-4">Análisis de Mercado</h4>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-navy mb-8">¿Dónde reside realmente su capital?</h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto leading-relaxed italic font-serif">
            Una comparativa objetiva entre la inversión en activos inmobiliarios de elite y los instrumentos tradicionales.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-[10px] font-black uppercase tracking-[0.3em] text-navy/30">
                <th className="py-8 px-10">Criterio de Evaluación</th>
                <th className="py-8 px-10 text-center bg-navy text-white rounded-t-3xl relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-dark text-[10px] px-3 py-1 rounded-full font-black">SOLUCIÓN EXPERTA</div>
                  Activo Más
                </th>
                <th className="py-8 px-10 text-center">AFP</th>
                <th className="py-8 px-10 text-center">Depósito a Plazo</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="group editorial-card">
                  <td className="py-8 px-10 font-bold border-b border-stone/30 text-navy">{row.label}</td>
                  <td className="py-8 px-10 text-center bg-navy/5 border-x border-navy/10">
                    <div className="flex flex-col items-center">
                      <Check className="text-vibrant-green mb-3" size={20} />
                      <span className="text-sm font-bold text-navy">{row.activo}</span>
                    </div>
                  </td>
                  <td className="py-8 px-10 text-center border-b border-stone/30">
                    <div className="flex flex-col items-center">
                      <AlertTriangle className="text-orange-600 mb-3" size={20} />
                      <span className="text-sm text-navy/70 font-medium">{row.afp}</span>
                    </div>
                  </td>
                  <td className="py-8 px-10 text-center border-b border-stone/30">
                    <div className="flex flex-col items-center">
                      <X className="text-red-600 mb-3" size={20} />
                      <span className="text-sm text-navy/70 font-medium">{row.banco}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn-primary mx-auto text-xl px-16 py-6"
          >
            QUIERO QUE MI CAPITAL TRABAJE PARA MÍ
          </motion.button>
        </div>
      </div>
    </section>
  );
}
