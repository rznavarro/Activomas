import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/56900000000" // Placeholder
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 gold-gradient rounded-full shadow-2xl flex items-center justify-center text-dark cursor-pointer border-4 border-dark"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -left-2 bg-emerald text-dark text-[10px] font-black px-2 py-1 rounded-full animate-pulse border-2 border-dark">
         ONLINE
      </span>
    </motion.a>
  );
}
