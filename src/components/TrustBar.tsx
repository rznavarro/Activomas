import { motion } from 'motion/react';

export default function TrustBar() {
  const logos = [
    { name: 'CNN Chile', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN_Chile_2018.png' },
    { name: 'Meganoticias', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Meganoticias_2021.png' },
    { name: 'La Tercera', src: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/La_Tercera_Logo.png' },
    { name: 'TVN', src: 'https://upload.wikimedia.org/wikipedia/commons/7/77/TVN_Logo_2016.png' },
    { name: 'El Mercurio', src: 'https://upload.wikimedia.org/wikipedia/commons/0/07/El_mercurio_logo_chile.png' },
    { name: 'Forbes', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Forbes_logo.svg' },
    { name: 'Diario Financiero', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Logo-df-cl.png' }
  ];

  const stats = [
    { value: '5 años', label: 'en el mercado' },
    { value: '+3.000', label: 'inversionistas activos' },
    { value: 'UF 10M+', label: 'en ventas' },
    { value: '40+', label: 'proyectos disponibles' }
  ];

  return (
    <section className="bg-charcoal/30 border-y border-white/5 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logos */}
        <div className="mb-16">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-white/30 mb-8">
            Referentes en la opinión pública
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default">
             {/* Placeholder for logos to avoid broken images if external links fail, but we use styling to manage */}
             {logos.map((logo) => (
               <span key={logo.name} className="text-xl lg:text-2xl font-bold text-white/50 hover:text-white transition-colors">
                 {logo.name}
               </span>
             ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-display font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
