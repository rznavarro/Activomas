import { motion } from 'motion/react';
import { MapPin, Train, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      status: "Entrega Inmediata",
      statusColor: "bg-emerald-500",
      name: "Villa Mediterránea",
      comuna: "Lo Barnechea, Santiago",
      metro: "Acceso Privado",
      price: "12.450",
      cuota: "885.000",
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      status: "En Verde",
      statusColor: "bg-luxury-gold",
      name: "Residence Suite II",
      comuna: "Las Condes, Santiago",
      metro: "Metro El Golf",
      price: "4.100",
      cuota: "340.000",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      status: "Exclusivo",
      statusColor: "bg-navy",
      name: "The Grand Tower",
      comuna: "Pudahuel Sur",
      metro: "Plan Maestro",
      price: "8.800",
      cuota: "610.000",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="proyectos" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-navy">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-luxury-gold font-bold text-xs uppercase tracking-[0.4em] mb-4">Stock Exclusivo</h4>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-navy mb-8 leading-tight">Oportunidades de<br />Inversión de Clase Mundial</h2>
            <p className="text-navy/60 text-lg leading-relaxed">
              Acuerdos directos con las mejores inmobiliarias de Chile. Precios, descuentos y condiciones que representan la cima del mercado.
            </p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-navy font-black text-xs uppercase tracking-[0.2em] flex items-center group whitespace-nowrap border-b-2 border-luxury-gold pb-2"
          >
            VER TODO EL PLAN MAESTRO
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-[2rem] shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img src={project.img} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute top-6 left-6 ${project.statusColor} text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg`}>
                  {project.status}
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center text-luxury-gold text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                  <MapPin size={12} className="mr-2" /> {project.comuna}
                </div>
                <h3 className="text-3xl font-serif font-bold text-navy mb-4 group-hover:text-luxury-gold transition-colors">{project.name}</h3>
                
                <div className="flex items-center gap-3 border-y border-stone/50 py-4 mb-6">
                  <Train size={16} className="text-navy/30" />
                  <span className="text-xs font-bold tracking-widest text-navy/60">{project.metro}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-navy/40 uppercase tracking-widest font-bold mb-1">Precio</p>
                    <p className="text-2xl font-serif font-bold text-navy">UF {project.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-navy/40 uppercase tracking-widest font-bold mb-1">Desde</p>
                    <p className="text-2xl font-serif font-bold text-navy">${project.cuota}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-navy p-12 lg:p-20 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">¿Preparado para asegurar su legacy?</h3>
             <p className="text-white/60 mb-10 text-lg">Nuestros especialistas le asistirán en la simulación de su capacidad crediticia y la selección de activos estratégicos.</p>
             <button className="btn-primary mx-auto text-xl px-12">
               SOLICITAR ASESORÍA PRIVADA
             </button>
           </div>
        </div>
      </div>
    </section>
  );
}
