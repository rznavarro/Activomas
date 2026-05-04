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
      label: "Control sobre tu dinero", 
      activo: "Total y tangible", 
      afp: "Nulo antes de los 65", 
      banco: "Medio" 
    },
    { 
      label: "Protección vs Inflación", 
      activo: "Natural (vives en UF)", 
      afp: "Parcial", 
      banco: "Moderada (solo si es UF)" 
    },
    { 
      label: "Herencia para familia", 
      activo: "Propiedad completa", 
      afp: "Solo saldo restante", 
      banco: "Saldo cuenta" 
    },
    { 
      label: "Renta mensual pasiva", 
      activo: "Mensual asegurada", 
      afp: "Solo tras jubilar", 
      banco: "Interés marginal" 
    }
  ];

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">¿Dónde está realmente tu dinero?</h2>
          <p className="text-white/50 text-lg">Un comparación honesta entre los vehículos de inversión tradicionales en Chile.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-sm font-bold uppercase tracking-widest text-white/30 px-6">
                <th className="py-4 px-6">Criterio</th>
                <th className="py-4 px-6 text-center bg-gold/10 rounded-t-2xl text-gold border-x border-t border-gold/30 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-dark text-[10px] px-3 py-1 rounded-full font-black">RECOMENDADO</div>
                  Propiedad Activo Más
                </th>
                <th className="py-4 px-6 text-center">AFP</th>
                <th className="py-4 px-6 text-center">Depósito a Plazo</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="group">
                  <td className="py-6 px-6 font-bold border-b border-white/5">{row.label}</td>
                  <td className="py-6 px-6 text-center bg-gold/5 border-x border-gold/20 flex-col items-center justify-center">
                    <div className="flex flex-col items-center">
                      <Check className="text-emerald mb-2" />
                      <span className="text-sm font-bold">{row.activo}</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-center border-b border-white/5">
                    <div className="flex flex-col items-center">
                      <AlertTriangle className="text-orange-500 mb-2" />
                      <span className="text-sm opacity-60">{row.afp}</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-center border-b border-white/5">
                    <div className="flex flex-col items-center">
                      <X className="text-red-500 mb-2" />
                      <span className="text-sm opacity-60">{row.banco}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="gold-gradient text-dark px-12 py-5 rounded-2xl font-black text-xl shadow-2xl"
          >
            Quiero que mi dinero trabaje para mí
          </motion.button>
        </div>
      </div>
    </section>
  );
}
