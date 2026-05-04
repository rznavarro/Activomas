import { motion } from 'motion/react';
import { MapPin, Train, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      status: "Entrega Inmediata",
      statusColor: "bg-emerald",
      name: "Parque Bustamante II",
      comuna: "Ñuñoa",
      metro: "Santa Isabel L5",
      price: "2.450",
      cuota: "185.000",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      status: "En Verde",
      statusColor: "bg-orange-500",
      name: "Edificio Conceptus",
      comuna: "Santiago Centro",
      metro: "Santa Ana L2",
      price: "2.100",
      cuota: "140.000",
      img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      status: "En Blanco",
      statusColor: "bg-blue-500",
      name: "Legacy Tower",
      comuna: "La Florida",
      metro: "Vicente Valdés L4",
      price: "2.800",
      cuota: "210.000",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Stock exclusivo para inversionistas</h2>
            <p className="text-white/50 text-lg">
              Acuerdos directos con las mejores inmobiliarias de Chile. Precios, descuentos y condiciones que no encontrarás en otro lado.
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-gold font-bold flex items-center group whitespace-nowrap"
          >
            Ver todos los proyectos
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-charcoal rounded-3xl overflow-hidden border border-white/5 hover:border-gold/20 transition-all flex flex-col"
            >
              <div className="relative h-64">
                <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
                <div className={`absolute top-4 left-4 ${project.statusColor} text-dark text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-full shadow-lg`}>
                  {project.status}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                <div className="flex items-center text-white/50 text-sm mb-4">
                  <MapPin size={14} className="mr-1" /> {project.comuna}
                </div>
                
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl mb-6">
                  <Train size={18} className="text-gold" />
                  <span className="text-sm font-medium">{project.metro}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Desde</p>
                    <p className="text-xl font-display font-bold text-gold">UF {project.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold text-right">Cuota Est.</p>
                    <p className="text-xl font-display font-bold text-white">${project.cuota}</p>
                  </div>
                </div>

                <button className="w-full py-4 border border-white/10 rounded-xl font-bold hover:bg-white hover:text-dark transition-all mt-auto">
                  Ver detalles del proyecto
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-charcoal/50 border border-white/5 p-8 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <p className="text-lg font-medium text-white/90">
              ¿El pie te preocupa? En muchos proyectos se paga en cuotas y el dividendo lo cubre el arrendatario.
            </p>
          </div>
          <button className="gold-gradient text-dark px-8 py-4 rounded-xl font-bold shadow-xl">
             Simular capacidad de crédito
          </button>
        </div>
      </div>
    </section>
  );
}
